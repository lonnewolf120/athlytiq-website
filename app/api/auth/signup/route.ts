import { type NextRequest, NextResponse } from "next/server"

// This is a mock API route for demonstration
// Replace with your actual registration logic

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

    // Mock registration - Replace with your actual registration logic
    // This would typically involve:
    // 1. Checking if email already exists
    // 2. Hashing the password
    // 3. Saving user to database
    // 4. Sending welcome email
    // 5. Generating JWT tokens

    // Simulate checking if email already exists
    if (email === "existing@fittracker.com") {
      return NextResponse.json({ message: "An account with this email already exists" }, { status: 409 })
    }

    // Mock successful registration
    const user = {
      id: Date.now().toString(), // In real app, this would be from database
      firstName,
      lastName,
      email,
      dateOfBirth,
      createdAt: new Date().toISOString(),
    }

    // In a real app, you'd:
    // 1. Hash the password before storing
    // 2. Save to database
    // 3. Send welcome email
    // 4. Set authentication cookies

    const response = NextResponse.json(
      {
        message: "Account created successfully",
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      { status: 201 },
    )

    // Set authentication cookie (example)
    response.cookies.set("auth-token", "mock-jwt-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    console.error("Sign up error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
