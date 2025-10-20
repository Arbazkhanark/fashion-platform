// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Menu, X, Search, User, Heart } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/browse", label: "Browse Experts" },
//     { href: "/become-provider", label: "Become a Provider" },
//     { href: "/style-assistant", label: "Style Assistant" },
//   ]

//   return (
//     <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition-smooth">
//               <span className="text-primary-foreground font-bold text-lg">S</span>
//             </div>
//             <span className="font-bold text-lg hidden sm:inline group-hover:text-primary transition-smooth">
//               StyleConnect
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
//               >
//                 {link.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
//               </Link>
//             ))}
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-secondary rounded-lg transition-smooth hidden sm:block hover:text-primary">
//               <Search className="w-5 h-5" />
//             </button>
//             <button className="p-2 hover:bg-secondary rounded-lg transition-smooth hidden sm:block hover:text-primary">
//               <Heart className="w-5 h-5" />
//             </button>
//             <Link href="/auth/login">
//               <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent hover:bg-secondary">
//                 <User className="w-4 h-4 mr-2" />
//                 Sign In
//               </Button>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
//             >
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4 space-y-2 animate-slide-up">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-smooth"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link href="/auth/login" className="block w-full">
//               <Button className="w-full mt-4">Sign In</Button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }









"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, User, Heart, Sparkles, ChevronDown, LogOut, Settings, User as UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Change to true to see user menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/designers", label: "Browse Experts" },
    { href: "/become-provider", label: "Become a Provider" },
    { href: "/style-assistant", label: "Style Assistant" },
  ]

  const userMenuItems = [
    { href: "/dashboard", label: "Dashboard", icon: UserIcon },
    { href: "/profile", label: "My Profile", icon: User },
    { href: "/favorites", label: "Favorites", icon: Heart },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/logout", label: "Logout", icon: LogOut },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50" 
        : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                StyleConnect
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Fashion Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-amber-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all duration-300 hover:scale-110 hover:text-rose-600 dark:hover:text-rose-400 group animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites */}
            <button className="p-2 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all duration-300 hover:scale-110 hover:text-rose-600 dark:hover:text-rose-400 group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Heart className="w-5 h-5" />
            </button>

            {/* User Menu or Sign In */}
            {isLoggedIn ? (
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-2 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-12 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl py-2 animate-glow-in">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                      <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">sarah@example.com</p>
                    </div>
                    
                    {/* Menu Items */}
                    {userMenuItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 group animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Link href="/auth/login">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:scale-105 transition-all duration-300"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Join Free
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="flex gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <Link href="/auth/login" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full bg-transparent border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white">
                  Join Free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
        .animate-glow-in {
          animation: glow-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}
