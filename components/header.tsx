"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="font-bold text-white text-xs sm:text-sm">WW</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-white">Wired Wits</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-6">
              {["About", "Features", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white h-8 w-8 sm:h-9 sm:w-9">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-900/95 backdrop-blur-md border-slate-800">
              <div className="flex flex-col gap-8 mt-8">
                <nav>
                  <ul className="flex flex-col gap-4">
                    {["About", "Features", "Contact"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-slate-300 hover:text-white transition-colors text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
