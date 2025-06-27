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
        className="h-screen w-screen dark:text-white dark:selection:bg-sky-800 dark:selection:text-white"
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
