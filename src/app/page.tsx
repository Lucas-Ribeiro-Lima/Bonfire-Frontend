'use client'
import LogoCompleta from '@/components/UI/logo'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
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
