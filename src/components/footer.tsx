"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Platform: [
      { label: "Browse Experts", href: "/browse" },
      { label: "Become a Provider", href: "/become-provider" },
      { label: "Style Assistant", href: "/style-assistant" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Community", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-secondary/50 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest trends, expert tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
              <Button className="px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-lg group-hover:text-primary transition-smooth">
                StyleConnect
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Connecting you with the best fashion designers and beauty experts for every occasion.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={`${category}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-border">
          <div className="flex gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <a
                href="mailto:support@styleconnect.com"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                support@styleconnect.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-sm text-muted-foreground">
                123 Fashion Street, Style City, SC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} StyleConnect. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-primary fill-primary" /> for fashion lovers.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
