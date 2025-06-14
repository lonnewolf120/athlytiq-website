import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Basic validation
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address" }, { status: 400 })
    }

    // Supabase password reset
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${request.nextUrl.origin}/auth/update-password`, // Redirect to a page where user can set new password
    })

    if (error) {
      console.error("Supabase forgot password error:", error.message)
      // For security, always return a generic success message to prevent email enumeration
      return NextResponse.json(
        { message: "If an account with this email exists, we've sent a password reset link." },
        { status: 200 },
      )
    }

    return NextResponse.json(
      { message: "If an account with this email exists, we've sent a password reset link." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Forgot password error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
