'use client'

import { FetchData } from '@/hooks/fetchData'
import { LoadLines } from '@/schemas/LinesFrameDataSchema'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function LinesLayout() {
  const { data } = FetchData<LoadLines>('linha')

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data?.linha || []}></DataTable>
    </div>
  )
}
