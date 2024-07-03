'use client'

import { VehicleContext } from '@/contexts/vehicleContext'
import { useContext } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function VehiclesLayout() {
  const { data } = useContext(VehicleContext)

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
