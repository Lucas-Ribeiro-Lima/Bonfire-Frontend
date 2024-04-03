'use client'

import { FetchData } from '@/hooks/fetchData'
import { toast } from 'sonner'
import { LinesFrameData, columns } from './columns'
import { DataTable } from './data-table'

export default function LinesLayout() {
  const { data, error } = FetchData<LinesFrameData[]>('linha')

  if (error) return toast(error.message)

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
