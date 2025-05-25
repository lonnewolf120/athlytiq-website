"use client"

import { Users, MessageCircle, Trophy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommunitySection() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Connect with Fitness Enthusiasts",
      description:
        "Join a supportive community of like-minded individuals who share your passion for health and fitness.",
    },
    {
      icon: Share2,
      title: "Share Your Progress",
      description:
        "Document your fitness journey, share achievements, and inspire others with your transformation story.",
    },
    {
      icon: Trophy,
      title: "Challenges & Competitions",
      description: "Participate in fitness challenges and friendly competitions to stay motivated and engaged.",
    },
    {
      icon: MessageCircle,
      title: "Get Support & Motivation",
      description: "Receive encouragement from the community and share tips, advice, and workout experiences.",
    },
  ]

  return (
    <section id="community" className="py-20 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our Fitness{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Connect, share, and inspire with fellow fitness enthusiasts. Build lasting relationships and achieve your
              goals together in our supportive community.
            </p>

            <div className="space-y-6 mb-8">
              {communityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-lg px-8 py-3">
              Join Community
            </Button>
          </div>

          {/* Right Content - Community Showcase */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main Community Image */}
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/30 overflow-hidden">
                <div className="h-96 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
              </div>

              {/* Floating Member Cards */}
              <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[url('/placeholder.svg?height=50&width=50')] bg-cover bg-center rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Alex M.</p>
                    <p className="text-red-400 text-sm">Lost 30 lbs!</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[url('/placeholder.svg?height=50&width=50')] bg-cover bg-center rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Sarah K.</p>
                    <p className="text-red-400 text-sm">Marathon ready!</p>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500/90 to-orange-500/90 backdrop-blur-sm rounded-xl p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">10K+</p>
                  <p className="text-white/80 text-sm">Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
