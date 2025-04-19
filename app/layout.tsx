import type {Metadata} from "next"
import "./globals.css"
import {Toaster} from "@/components/ui/toaster"
import {ThemeProvider} from "@/components/navigation/theme-provider"
import {Inter} from "next/font/google"
import { AuthProvider } from "@/context/authContext"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Makegrid",
  description: "Makegrid",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
