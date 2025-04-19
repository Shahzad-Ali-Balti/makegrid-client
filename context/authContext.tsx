"use client"
import {createContext, useState, useEffect, ReactNode} from "react"
import {useRouter} from "next/navigation"
import {setLogoutHandler} from "@/utils/axiosInstance"
import axiosInstance from "@/utils/axiosInstance"

type User = {
  id: string
  email: string
  username?: string
  tokens?: number
  subscription_type?: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
  loading: boolean
  credits: string
  creditsCount: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [credits, setCredits] = useState<string>("0")

  const router = useRouter()

  useEffect(() => {
    const storedToken = sessionStorage.getItem("access_token")
    const storedUser = sessionStorage.getItem("user")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
      creditsCount()
    }

    setLoading(false)
    setLogoutHandler(() => logout)
  }, [])

  const creditsCount = async () => {
    try {
      const res = await axiosInstance.get("/api/accounts/credits/")
      const creditValue = res.data?.credits || "0"
      setCredits(creditValue.toString())
    } catch (err) {
      console.error("Failed to fetch credits", err)
      setCredits("0")
    }
  }

  const login = (user: User, token: string) => {
    setUser(user)
    setToken(token)
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    sessionStorage.setItem("access_token", token)
    sessionStorage.setItem("user", JSON.stringify(user))
    creditsCount() // ✅ fetch credits on login
  }

  const logout = async () => {
    // try {
    //   await axiosInstance.post("/api/accounts/logout/") // ✅ backend clears the cookie
    // } catch (e) {
    //   console.warn("Failed to notify backend during logout:", e)
    // }

    setUser(null)
    setToken(null)
    sessionStorage.clear()
    setCredits("0")
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        credits,
        creditsCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
