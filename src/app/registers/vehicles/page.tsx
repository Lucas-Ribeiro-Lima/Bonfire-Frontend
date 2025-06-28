import { PrimaryLayout } from '@/components/UI/primaryLayout'
import { VehiclesLayout } from '@/components/vehicles/vehiclesLayout'
import { VehiclesProvider } from '@/contexts/vehicleContext'

export const metadata = {
  title: 'Bonfire - veículos',
}

export default function Vehicles() {
  return (
    <PrimaryLayout>
      <VehiclesProvider>
        <VehiclesLayout></VehiclesLayout>
      </VehiclesProvider>
    </PrimaryLayout>
  )
}
