"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Smartphone, Activity } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Track Workouts",
      subtitle: "Visualize Your Progress",
      description: "Log exercises, sets, and reps effortlessly to monitor your fitness journey and achieve your goals.",
    },
    {
      title: "Monitor Health",
      subtitle: "Complete Health Insights",
      description: "Keep an eye on key metrics like weight, heart rate, BMI and get detailed training reports.",
    },
    {
      title: "AI Diet Plans",
      subtitle: "Smart Nutrition Guidance",
      description: "Get personalized diet recommendations based on your goals, preferences, and nutritional needs.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-red-900/30 z-10"></div>

      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-semibold">{slides[currentSlide].subtitle}</h2>
              <p className="text-lg text-gray-400 max-w-lg">{slides[currentSlide].description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 text-lg group"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-80 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-red-500/30 relative">
                {/* Phone Screen */}
                <div className="w-72 h-88 bg-black rounded-2xl border-4 border-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                </div>

                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce opacity-80 flex items-center justify-center">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-red-500 to-orange-500 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
