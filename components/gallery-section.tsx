"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const tabs = ["Workout Tracking", "Health Monitor", "Diet Plans", "Food Scanner", "Community", "Analytics"]

  const galleryImages = [
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages[activeTab].length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages[activeTab].length - 1 : prev - 1))
  }

  return (
    <section id="gallery" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            App{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Screenshots
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the intuitive interface and powerful features of our fitness tracking app
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index)
                setCurrentImageIndex(0)
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-black/20 text-gray-400 hover:bg-black/40 hover:text-white border border-red-500/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {/* Phone Frame */}
              <div className="w-72 h-[500px] bg-black rounded-3xl border-4 border-gray-800 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${galleryImages[activeTab][currentImageIndex]})` }}
                ></div>

                {/* Phone Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {galleryImages[activeTab].length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="p-6">
              <div className="flex justify-center space-x-4 overflow-x-auto">
                {galleryImages[activeTab].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index ? "border-red-500" : "border-transparent hover:border-red-500/50"
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
