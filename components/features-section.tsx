"use client"

import { useState } from "react"
import { Activity, Heart, Users, Brain, Camera, MapPin } from "lucide-react"

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Activity,
      title: "Track Workouts",
      description: "Log exercises, sets, and reps effortlessly to monitor progress and visualize your fitness journey.",
    },
    {
      icon: Heart,
      title: "Monitor Health",
      description: "Keep an eye on key metrics like weight, heart rate, BMI and get comprehensive training reports.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect, share, and inspire with fellow fitness enthusiasts in our supportive community.",
    },
    {
      icon: Brain,
      title: "AI Diet Recommendation",
      description: "Get personalized diet recommendations according to your specific needs and fitness goals.",
    },
    {
      icon: Camera,
      title: "Food Scanning",
      description: "Scan food items instantly to measure macros and track your nutritional intake accurately.",
    },
    {
      icon: MapPin,
      title: "Location-Based Shop",
      description: "Find supplements and nutrition products based on your location and nutritional deficiencies.",
    },
  ]

  return (
    <section id="features" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to track, monitor, and achieve your fitness goals in one comprehensive app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border border-red-500/20 backdrop-blur-sm transition-all duration-500 cursor-pointer group ${
                  hoveredFeature === index
                    ? "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/50 transform scale-105"
                    : "bg-black/20 hover:bg-black/40"
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-full mb-6 transition-all duration-300 ${
                      hoveredFeature === index
                        ? "bg-gradient-to-r from-red-500 to-orange-500 scale-110"
                        : "bg-red-500/20 group-hover:bg-red-500/30"
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                {/* Animated background effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${
                    hoveredFeature === index ? "opacity-100" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl animate-pulse"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
