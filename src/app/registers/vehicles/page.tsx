'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import VehiclesLayout from '@/components/vehicles/vehiclesLayout'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
    <NextUIProvider>
      <PrimaryLayout>
        <MainApp title="Veiculos">
          <VehiclesLayout></VehiclesLayout>
        </MainApp>
      </PrimaryLayout>
    </NextUIProvider>
  )
}
