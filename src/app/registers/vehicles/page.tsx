'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import VehiclesLayout from '@/components/vehicles/vehiclesLayout'
import { VehiclesProvider } from '@/contexts/vehicleContext'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp>
        <VehiclesProvider>
          <VehiclesLayout></VehiclesLayout>
        </VehiclesProvider>
      </MainApp>
    </PrimaryLayout>
  )
}
