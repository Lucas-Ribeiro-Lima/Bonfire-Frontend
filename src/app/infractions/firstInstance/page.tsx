'use client'

import InfractionLayout from '@/components/infractions/infractionLayout'
import MainApp from '@/components/ui/mainApp'
import PrimaryLayout from '@/components/ui/primaryLayout'
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
