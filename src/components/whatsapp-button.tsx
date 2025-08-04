"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full shadow-lg h-14 w-14 bg-orange-500 hover:bg-orange-600"
        asChild
      >
        <a
          href="https://wa.link/k1c971"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  )
}
