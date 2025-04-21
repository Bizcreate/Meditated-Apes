import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-lg rounded-full px-2 py-2 border border-white/10">
              <div className="flex items-center space-x-1">
                <Link href="/">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Profile
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Gallery
                  </Button>
                </Link>
                <Link href="/collection">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Collection
                  </Button>
                </Link>
                <Link href="/community">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Community
                  </Button>
                </Link>
                <Link href="/mint">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    Mint
                  </Button>
                </Link>
              </div>
            </nav>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
