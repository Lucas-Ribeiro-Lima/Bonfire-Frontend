'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import InfractionLayout from '@/components/infractions/infractionLayout'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <PrimaryLayout>
          <MainApp title="Primeira Instância">
            <InfractionLayout></InfractionLayout>
          </MainApp>
        </PrimaryLayout>
      </NextUIProvider>
    </SessionProvider>
  )
}
