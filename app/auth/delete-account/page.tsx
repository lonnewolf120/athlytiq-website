"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Trash2, Lock, Activity } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { useRouter } from "next/navigation"

export default function DeleteAccountPage() {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!password) {
      setError("Please enter your password to confirm deletion.")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setSuccess("Account deleted successfully. Redirecting...")
        // Redirect to home or a success page after a short delay
        setTimeout(() => {
          router.push("/")
        }, 2000)
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to delete account. Please try again.")
      }
    } catch (err) {
      console.error("Delete account fetch error:", err)
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <ParticleBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-red-500/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  FitTracker
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Delete Account</h1>
              <p className="text-gray-400">
                Are you sure you want to delete your account? This action is irreversible.
              </p>
            </div>

            {/* Messages */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-6">
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleDeleteAccount} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`pl-10 bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 ${
                      error && !password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your password to confirm"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Trash2 className="h-5 w-5 mr-2 animate-pulse" /> Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-5 w-5 mr-2" /> Delete My Account
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}