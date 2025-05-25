"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import CommunitySection from "@/components/community-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ParticleBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <GallerySection />
        <CommunitySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
