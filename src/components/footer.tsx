"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="EJOR-KORE SERVICES LTD Logo"
                width={120}
                height={120}
                // className="rounded-md"
              />
              {/* <div>
                <h3 className="font-bold text-lg">EJOR-KORE</h3>
                <p className="text-sm text-gray-300">SERVICES LTD</p>
              </div> */}
            </div>
            <p className="text-gray-300">
              Nigeria&apos;s premier <span className="text-orange-400 font-semibold">borehole drilling</span> and geotechnical services company.
              Over 20 years of experience delivering quality drilling solutions.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link
                href="https://wa.link/k1c971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('home')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('team')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Team
                </button>
              </li>
              {/* <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('portfolio')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Portfolio
                </button>
              </li> */}

              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Borehole Drilling (10m - 400m+)</li>
              <li>Complete Borehole Development</li>
              <li>Geotechnical Site Assessment</li>
              <li>Borehole Testing & Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+2348037840713</p>
                  {/* <p className="text-gray-300">+2348037840713</p> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ejorkoreservices@gmail.com</p>
                  {/* <p className="text-gray-300">ejorkoreservices@gmail.com</p> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">2 Nnam Street off Ihe Street One-Day Rd. Awkunanaw Enugu</p>
                  {/* <p className="text-gray-300">Serving nationwide</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 EJOR-KORE Services Ltd. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
