import React from "react"
import {LoginForm} from "@/app/(public)/login/components/login-form"
import background from "@/assets/background.jpg"

const LoginPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-black  p-6 md:p-10">
      <div className="fixed blur-md opacity-70 w-full h-full">
        <img
          loading="lazy"
          src={background.src}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
