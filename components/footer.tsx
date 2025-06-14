"use client"

import { Activity, Mail, Phone, Facebook, Instagram, Twitter, Smartphone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-red-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="text-white font-bold text-xl">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  FitTracker
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The ultimate fitness tracking app that helps you monitor workouts, track health metrics, and achieve your
              fitness goals with AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-500/20 hover:bg-red-500/40 p-3 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-red-500/20 hover:bg-red-500/40 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-red-500/20 hover:bg-red-500/40 p-3 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Features</h3>
            <ul className="space-y-3">
              {[
                "Workout Tracking",
                "Health Monitoring",
                "AI Diet Plans",
                "Food Scanning",
                "Community",
                "Progress Analytics",
              ].map((feature) => (
                <li key={feature}>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
                {[
                { name: "Help Center", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  {link.name}
                  </a>
                </li>
                ))}
            </ul>
          </div>

          {/* Download & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get the App</h3>
            <div className="space-y-4 mb-6">
              <a
                href="#"
                className="flex items-center space-x-3 bg-black/40 hover:bg-black/60 p-3 rounded-lg transition-colors duration-300"
              >
                <Smartphone className="h-6 w-6 text-red-400" />
                <div>
                  <p className="text-white font-semibold">Download for iOS</p>
                  <p className="text-gray-400 text-sm">Available on App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 bg-black/40 hover:bg-black/60 p-3 rounded-lg transition-colors duration-300"
              >
                <Smartphone className="h-6 w-6 text-red-400" />
                <div>
                  <p className="text-white font-semibold">Download for Android</p>
                  <p className="text-gray-400 text-sm">Available on Google Play</p>
                </div>
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">support@fittracker.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 FitTracker. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
