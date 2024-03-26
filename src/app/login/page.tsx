'use client'
import SecondaryLayout from '@/components/UI/secondaryLayout'
import LoginMenu from '@/components/login/loginMenu'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function login(session: Session) {
  return (
    <SessionProvider session={session}>
      <SecondaryLayout>
        <LoginMenu></LoginMenu>
      </SecondaryLayout>
    </SessionProvider>
  )
}
