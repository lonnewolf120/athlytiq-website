import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SupabaseProvider } from '@/components/supabase-provider'

export const metadata: Metadata = {
  title: 'Athlytiq',
  description: 'Fitness app',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Header />
      <body>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
      <Footer />
    </html>
  )
}
