'use client'

import { VehicleContext } from '@/contexts/vehicleContext'
import { useContext } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function VehiclesLayout() {
  const { data } = useContext(VehicleContext)

  return <DataTable columns={columns} data={data || []}></DataTable>
}
