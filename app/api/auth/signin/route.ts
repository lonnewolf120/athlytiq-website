import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Supabase authentication
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      console.error("Supabase sign in error:", signInError.message)
      return NextResponse.json({ message: signInError.message }, { status: 401 })
    }

    if (!data.user || !data.session) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // In a real app, you'd set secure HTTP-only cookies here
    // Supabase's auth helpers typically handle cookie setting automatically in Next.js environments
    // For server-side routes, you might need to manually set cookies if not using auth helpers directly
    // For this example, we'll assume Supabase's default behavior or rely on client-side session management.

    // Fetch user profile data if needed (e.g., first name, last name)
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("first_name, last_name")
      .eq("id", data.user.id)
      .single()

    if (profileError) {
      console.error("Error fetching profile data:", profileError.message)
      // Decide how to handle this: proceed without profile data or return an error
    }

    const user = {
      id: data.user.id,
      email: data.user.email,
      firstName: profileData?.first_name || null,
      lastName: profileData?.last_name || null,
    }

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: user,
      },
      { status: 200 },
    )

    // Supabase auth helpers usually handle setting the session cookie.
    // If you need to manually set a cookie for other purposes, you can do so here.
    // For example, if you were using a custom JWT:
    // response.cookies.set("auth-token", data.session.access_token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: data.session.expires_in,
    // });

    return response
  } catch (error) {
    console.error("Sign in error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
