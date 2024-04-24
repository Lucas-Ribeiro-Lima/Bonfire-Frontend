'use client'

import { FetchData } from '@/hooks/fetchData'
import { VehiclesData } from '@/schemas/VechicleSchema'
import { toast } from 'sonner'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function VehiclesLayout() {
  const { data, error } = FetchData<VehiclesData[]>('veiculos')

  if (error) return toast(error.message)

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
