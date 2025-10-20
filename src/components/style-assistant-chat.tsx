"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

const styleAssistantResponses: Record<string, string> = {
  wedding: `For wedding styling, I recommend:
  
1. **Bridal Wear**: Consider traditional lehengas or sarees with intricate embroidery. Modern brides often prefer fusion designs that blend traditional and contemporary elements.

2. **Color Palette**: Classic choices include red, maroon, gold, and cream. Pastels like blush pink and champagne are trending for modern weddings.

3. **Accessories**: Statement jewelry, elaborate necklaces, and traditional bangles complement bridal wear beautifully.

4. **Makeup**: Opt for bold eyes and defined features that photograph well. Waterproof makeup is essential for outdoor ceremonies.

5. **Recommended Designers**: I suggest connecting with our bridal specialists who have 10+ years of experience.`,

  casual: `For casual everyday styling:

1. **Basics**: Invest in quality basics - white tees, denim, neutral trousers that form the foundation of any wardrobe.

2. **Layering**: Master the art of layering with jackets, cardigans, and blazers for versatile looks.

3. **Color Coordination**: Stick to a cohesive color palette (neutrals + 2-3 accent colors) for easy mixing and matching.

4. **Comfort First**: Choose breathable fabrics and well-fitting pieces that make you feel confident.

5. **Accessories**: Simple jewelry, scarves, and bags can elevate casual outfits instantly.`,

  corporate: `For professional corporate styling:

1. **Dress Code**: Understand your workplace dress code - business formal, business casual, or smart casual.

2. **Tailoring**: Well-fitted clothes are crucial. Invest in tailoring to ensure perfect fit.

3. **Color Choices**: Stick to professional colors - navy, black, gray, white, and muted tones.

4. **Fabrics**: Choose quality fabrics like cotton blends, wool, and linen that look polished.

5. **Grooming**: Professional grooming and minimal jewelry complete the corporate look.`,

  party: `For party and evening wear:

1. **Occasion Matters**: Choose outfit style based on party type - cocktail, formal dinner, or casual gathering.

2. **Fabrics**: Silk, satin, and embellished fabrics add glamour and sophistication.

3. **Silhouettes**: Experiment with different cuts - A-line, bodycon, or flowing styles based on your comfort.

4. **Statement Pieces**: One statement piece (jewelry, clutch, or shoes) can elevate your entire look.

5. **Confidence**: The best accessory is confidence. Wear what makes you feel amazing!`,

  default: `Hello! I'm your AI Style Assistant. I can help you with styling advice for various occasions. 

Ask me about:
- Wedding styling and bridal wear
- Casual everyday fashion
- Corporate and professional dressing
- Party and evening wear
- Color coordination and accessories
- Body type and flattering styles
- Seasonal fashion tips

What would you like styling advice on?`,
}

export default function StyleAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: styleAssistantResponses.default,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let response = styleAssistantResponses.default

      if (lowerInput.includes("wedding") || lowerInput.includes("bridal")) {
        response = styleAssistantResponses.wedding
      } else if (lowerInput.includes("casual") || lowerInput.includes("everyday")) {
        response = styleAssistantResponses.casual
      } else if (
        lowerInput.includes("corporate") ||
        lowerInput.includes("professional") ||
        lowerInput.includes("office")
      ) {
        response = styleAssistantResponses.corporate
      } else if (lowerInput.includes("party") || lowerInput.includes("evening") || lowerInput.includes("event")) {
        response = styleAssistantResponses.party
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Chat Container */}
      <Card className="flex-1 flex flex-col border border-border mb-6 overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-accent text-accent-foreground rounded-br-none"
                    : "bg-secondary text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p
                  className={`text-xs mt-2 ${message.type === "user" ? "text-accent-foreground/70" : "text-muted-foreground"}`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary text-foreground px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ask me about styling tips, fashion advice, or designer recommendations..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-secondary border-border"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="icon"
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      </Card>

      {/* Quick Suggestions */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Quick suggestions:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: "💍", text: "Wedding styling tips" },
            { icon: "👔", text: "Corporate dress code" },
            { icon: "🎉", text: "Party outfit ideas" },
            { icon: "✨", text: "Color coordination guide" },
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInput(suggestion.text)}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition text-left"
            >
              <span className="text-xl">{suggestion.icon}</span>
              <span className="text-sm font-medium text-foreground">{suggestion.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
