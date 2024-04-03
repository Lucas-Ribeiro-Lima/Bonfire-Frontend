'use client'

import { FetchData } from '@/hooks/fetchData'
import { toast } from 'sonner'
import { columns } from './columns'
import { DataTable } from './data-table'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'

export default function LinesLayout() {
  const { data, error } = FetchData<LinesFrameData[]>('linha')

  if (error) return toast(error.message)

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
