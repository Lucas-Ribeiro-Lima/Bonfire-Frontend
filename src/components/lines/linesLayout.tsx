'use client'

import { linesContext } from '@/contexts/lineContext'
import { useContext } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function LinesLayout() {
  const { data } = useContext(linesContext)

  return (
    <div className="flex w-full flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
