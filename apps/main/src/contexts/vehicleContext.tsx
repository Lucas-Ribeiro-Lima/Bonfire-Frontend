'use client'

import { VehiclesData } from '@/schemas/VechicleSchema'
import { useVehicles } from '@/hooks/useVehicles'
import { createContext, useMemo } from 'react'
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
  const { handleGet } = useVehicles()
  const { data, mutate } = handleGet()

  const valueMemo = useMemo(() => ({ data, mutate }), [data, mutate])

  return (
    <VehicleContext.Provider value={valueMemo}>
      {children}
    </VehicleContext.Provider>
  )
}
