'use client'

import { Error } from '@/components/ui/error'
import { FetchData } from '@/hooks/fetchData'
import { VehiclesData, columns } from './columns'
import { DataTable } from './data-table'

export default function VehiclesLayout() {
  const { data, error } = FetchData<VehiclesData[]>('veiculos')

  if (error) return <Error></Error>
  return (
    <div className="flex w-5/6 flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
