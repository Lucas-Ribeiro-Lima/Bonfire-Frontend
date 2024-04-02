'use client'
import LoginMenu from '@/components/login/loginMenu'
import SecondaryLayout from '@/components/ui/secondaryLayout'
import { SessionProvider } from 'next-auth/react'

export default function login(session: any) {
  return (
    <SessionProvider session={session}>
      <SecondaryLayout>
        <LoginMenu></LoginMenu>
      </SecondaryLayout>
    </SessionProvider>
  )
}
