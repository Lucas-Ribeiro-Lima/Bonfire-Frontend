'use client'
import LogoCompleta from '@/components/UI/logo'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: Session) {
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
