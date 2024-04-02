'use client'
import LogoCompleta from '@/components/ui/logo'
import MainApp from '@/components/ui/mainApp'
import PrimaryLayout from '@/components/ui/primaryLayout'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
  return (
    <SessionProvider session={session}>
      <PrimaryLayout>
        <MainApp>
          <LogoCompleta></LogoCompleta>
        </MainApp>
      </PrimaryLayout>
    </SessionProvider>
  )
}
