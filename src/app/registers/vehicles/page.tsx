'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import VehiclesLayout from '@/components/vehicles/vehiclesLayout'
import { NextUIProvider } from '@nextui-org/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: Session) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <PrimaryLayout>
          <MainApp title="Veiculos">
            <VehiclesLayout></VehiclesLayout>
          </MainApp>
        </PrimaryLayout>
      </NextUIProvider>
    </SessionProvider>
  )
}
