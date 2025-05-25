"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jessica Chen",
      role: "Weight Loss Success",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "FitTracker completely transformed my approach to fitness! The workout tracking and AI diet recommendations helped me lose 25 pounds in 4 months. The community support is incredible!",
    },
    {
      name: "Marcus Johnson",
      role: "Strength Training",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The detailed workout logging and progress visualization features are amazing. I can see exactly how I'm improving week by week. The food scanner makes nutrition tracking so easy!",
    },
    {
      name: "Emma Rodriguez",
      role: "Marathon Runner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The health monitoring features helped me optimize my training. Heart rate tracking and BMI monitoring gave me insights I never had before. Best fitness app I've ever used!",
    },
    {
      name: "David Park",
      role: "Busy Professional",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The AI diet recommendations are spot-on! It considers my busy schedule and dietary preferences. The location-based supplement suggestions are incredibly helpful too.",
    },
    {
      name: "Sophie Williams",
      role: "Fitness Enthusiast",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I love how the app tracks everything automatically. The food scanning feature is a game-changer - just point and scan! The community challenges keep me motivated every day.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real success stories from people who transformed their lives with our fitness tracking app
          </p>
        </div>

        {/* User Avatars */}
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                currentTestimonial === index ? "border-red-500 scale-110" : "border-gray-600 hover:border-red-500/50"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
            </button>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 lg:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500/20 hover:bg-red-500/40 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500/20 hover:bg-red-500/40 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center mb-4 border-4 border-red-500"
                  style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                ></div>
                <h4 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                <p className="text-red-400">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
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
