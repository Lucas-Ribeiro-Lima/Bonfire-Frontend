'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import VehiclesLayout from '@/components/vehicles/vehiclesLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Veiculos">
        <VehiclesLayout></VehiclesLayout>
      </MainApp>
    </PrimaryLayout>
  )
}
