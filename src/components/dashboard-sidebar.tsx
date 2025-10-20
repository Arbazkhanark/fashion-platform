"use client"
import { Calendar, History, Heart, Settings, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "overview", label: "Overview", icon: Calendar },
    { id: "appointments", label: "Upcoming Appointments", icon: Calendar },
    { id: "bookings", label: "Booking History", icon: History },
    { id: "saved", label: "Saved Designers", icon: Heart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-40 p-2 bg-accent text-accent-foreground rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-card border-r border-border transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } z-30`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">My Dashboard</h2>

          {/* User Profile Card */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-8">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg mb-3">
              JD
            </div>
            <p className="font-bold text-foreground">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === item.id ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Logout Button */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition mt-8 border-t border-border pt-8">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setIsOpen(false)} />}
    </>
  )
}
