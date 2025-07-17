"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const services = [
  {
    title: "Water Treatment",
    href: "#services",
    description: "Comprehensive water treatment solutions for all sectors",
  },
  {
    title: "Geotechnical Services",
    href: "#services",
    description: "Expert geotechnical engineering and soil analysis",
  },
  {
    title: "Environmental Assessment",
    href: "#services",
    description: "Professional environmental evaluation and compliance",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="EJOR-KORE SERVICES LTD Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button
                className="text-sm font-medium transition-colors hover:text-orange-600 cursor-pointer px-4 py-2"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2"
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link
              href="https://wa.me/+234XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Quote
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
            <button
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md w-full text-left"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md w-full text-left"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md w-full text-left"
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </button>
            <button
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md w-full text-left"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md w-full text-left"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link
                  href="https://wa.me/+234XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
