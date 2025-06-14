import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password, dateOfBirth } = await request.json()

    // Basic validation
    if (!firstName || !lastName || !email || !password || !dateOfBirth) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address" }, { status: 400 })
    }

    // Password validation
    if (password.length < 8) {
      return NextResponse.json({ message: "Password must be at least 8 characters long" }, { status: 400 })
    }

    // Supabase registration
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
        },
      },
    })

    if (signUpError) {
      console.error("Supabase sign up error:", signUpError.message)
      return NextResponse.json({ message: signUpError.message }, { status: 400 })
    }

    // If user is created but not confirmed (e.g., email verification is on)
    if (data.user && !data.session) {
      return NextResponse.json(
        { message: "Account created. Please check your email to verify your account." },
        { status: 200 },
      )
    }

    // If user is created and session is active (e.g., email verification is off)
    if (data.user && data.session) {
      // Optionally, insert additional profile data into a 'profiles' table
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          first_name: firstName,
          last_name: lastName,
          email: email,
          date_of_birth: dateOfBirth,
        },
      ])

      if (profileError) {
        console.error("Error inserting profile data:", profileError.message)
        // Decide how to handle this: rollback user creation or log and proceed
        return NextResponse.json({ message: "Account created, but profile data could not be saved." }, { status: 500 })
      }

      return NextResponse.json(
        {
          message: "Account created successfully",
          user: {
            id: data.user.id,
            email: data.user.email,
            firstName: firstName,
            lastName: lastName,
          },
        },
        { status: 201 },
      )
    }

    return NextResponse.json({ message: "An unexpected error occurred during sign up." }, { status: 500 })
  } catch (error) {
    console.error("Sign up error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
