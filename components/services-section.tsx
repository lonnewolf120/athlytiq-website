"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Workout Tracking",
      description: "Comprehensive exercise logging with detailed progress visualization and performance analytics.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Exercise library", "Progress charts", "Workout history", "Performance metrics"],
    },
    {
      title: "Health Monitoring",
      description: "Track vital health metrics and get detailed reports on your overall fitness progress.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Weight tracking", "Heart rate monitoring", "BMI calculator", "Health reports"],
    },
    {
      title: "AI Diet Plans",
      description: "Personalized nutrition recommendations powered by artificial intelligence.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Custom meal plans", "Macro tracking", "Calorie counting", "Nutrition insights"],
    },
    {
      title: "Food Scanning",
      description: "Instantly scan food items to get accurate nutritional information and macro breakdown.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Barcode scanning", "Macro analysis", "Nutrition facts", "Food database"],
    },
    {
      title: "Community Features",
      description: "Connect with fitness enthusiasts, share progress, and get motivated by others.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Social feed", "Progress sharing", "Challenges", "Motivation"],
    },
  ]

  return (
    <section id="services" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            App{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover all the powerful features that make our fitness tracking app your perfect workout companion
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50"
                      : "bg-black/20 border border-transparent hover:bg-black/40"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 ${activeService === index ? "text-white" : "text-gray-300"}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
            <div className="lg:w-2/3 py-7">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden">
              {/* Service Image */}
              <div className="h-64 lg:h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url(${services[activeService].image})` }}
                ></div>
              </div>

              {/* Service Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{services[activeService].title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{services[activeService].description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                  Try Feature
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
