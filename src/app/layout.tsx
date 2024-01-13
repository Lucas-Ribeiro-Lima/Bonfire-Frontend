import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
        <body className='dark bg-zinc-900 text-white selection:text-white selection:bg-red-800 h-screen w-screen'>
          {children}
        </body>
    </html>
  )
}
