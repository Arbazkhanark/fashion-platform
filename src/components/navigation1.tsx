"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">StyleConnect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/designers" className="text-foreground hover:text-accent transition">
              Find Designers
            </Link>
            <Link href="/categories" className="text-foreground hover:text-accent transition">
              Categories
            </Link>
            <Link href="/style-assistant" className="text-foreground hover:text-accent transition">
              Style Assistant
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/become-designer">Become a Designer</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/designers" className="block px-4 py-2 hover:bg-secondary rounded">
              Find Designers
            </Link>
            <Link href="/categories" className="block px-4 py-2 hover:bg-secondary rounded">
              Categories
            </Link>
            <Link href="/style-assistant" className="block px-4 py-2 hover:bg-secondary rounded">
              Style Assistant
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-secondary rounded">
              About
            </Link>
            <Link href="/login" className="block px-4 py-2 hover:bg-secondary rounded">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
