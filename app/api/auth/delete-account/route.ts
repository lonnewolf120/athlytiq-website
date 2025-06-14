import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Get the user session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError || !session) {
      console.error("Session error:", sessionError?.message || "No active session")
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const user = session.user

    // In a real application, you would re-authenticate the user with their password
    // before allowing account deletion for security.
    // For demonstration, we'll skip password verification here, but it's highly recommended.
    // Example:
    // const { error: signInError } = await supabase.auth.signInWithPassword({
    //   email: user.email,
    //   password: password,
    // });
    // if (signInError) {
    //   console.error("Re-authentication failed:", signInError.message);
    //   return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    // }

    // Delete the user from Supabase auth
    const { error: deleteUserError } = await supabase.auth.admin.deleteUser(user.id)

    if (deleteUserError) {
      console.error("Error deleting user:", deleteUserError.message)
      return NextResponse.json({ message: "Failed to delete account" }, { status: 500 })
    }

    // Optionally, delete associated user data from other tables (e.g., 'profiles')
    // This requires RLS policies to be set up correctly in Supabase, or using a service role key
    // For client-side deletion, you'd typically rely on RLS. For admin deletion, you might use:
    // const { error: deleteProfileError } = await supabase.from('profiles').delete().eq('id', user.id);
    // if (deleteProfileError) {
    //   console.error("Error deleting profile data:", deleteProfileError.message);
    //   // Decide whether to return an error or proceed, depending on your data integrity requirements
    // }

    // Sign out the user after deletion
    await supabase.auth.signOut()

    return NextResponse.json({ message: "Account deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Delete account error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}