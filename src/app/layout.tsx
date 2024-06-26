import { Toaster } from '@/components/UI/sonner'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BonFire',
  description: 'Processamento de autos de infração',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className="dark h-screen w-screen bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900 
      text-white selection:bg-sky-800 selection:text-white"
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
