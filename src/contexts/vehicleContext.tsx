import { VehiclesData } from '@/schemas/VechicleSchema'
import { GetVehicles } from '@/services/vehicles'
import { createContext } from 'react'
import { KeyedMutator } from 'swr'

type VehiclesContextProps = {
  data: VehiclesData[] | undefined
  mutate: KeyedMutator<VehiclesData[]>
}

type VehiclesProviderProps = {
  children: React.ReactNode
}

export const VehicleContext = createContext({} as VehiclesContextProps)

export function VehiclesProvider({
  children,
}: Readonly<VehiclesProviderProps>) {
  const { data, mutate } = GetVehicles()

  return (
    <VehicleContext.Provider value={{ data, mutate }}>
      {children}
    </VehicleContext.Provider>
  )
}
