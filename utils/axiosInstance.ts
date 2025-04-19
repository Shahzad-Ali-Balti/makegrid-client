import axios from 'axios'

// Will be set by AuthContext
let logoutFn: (() => void) | null = null

export const setLogoutHandler = (fn: () => void) => {
  logoutFn = fn
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // sends HttpOnly cookies
})

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error)
    else prom.resolve(token)
  })
  failedQueue = []
}

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers['Authorization'] = `Bearer ${token}`
              resolve(axiosInstance(originalRequest))
            },
            reject,
          })
        })
      }

      isRefreshing = true

      try {
        const res = await axiosInstance.post('/api/accounts/refresh/')
        const newAccessToken = res.data.access

        sessionStorage.setItem('access_token', newAccessToken)
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`

        processQueue(null, newAccessToken)
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

        return axiosInstance(originalRequest)
      } catch (err) {
        processQueue(err, null)
        if (logoutFn) logoutFn() // ✅ Auto logout if refresh fails
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

axiosInstance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('access_token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
