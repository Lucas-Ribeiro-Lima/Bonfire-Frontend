'use client'

import MainApp from '@/components/ui/mainApp'
import PrimaryLayout from '@/components/ui/primaryLayout'
import VehiclesLayout from '@/components/vehicles/vehiclesLayout'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
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
