'use client'

import { Error } from '@/components/ui/error'
import { FetchData } from '@/hooks/fetchData'
import { DEFAULTDATA } from '@/lib/utils'
import { LinesFrameData, columns } from './columns'
import { DataTable } from './data-table'
import { useState } from 'react'

export default function LinesLayout() {
  // Data fetching
  const [date, setDate] = useState(DEFAULTDATA)
  const { data, error } = FetchData<LinesFrameData[]>('linha')

  if (error) return <Error></Error>

  return (
    <div className="flex w-5/6 flex-col">
      <DataTable columns={columns} data={data || []}></DataTable>
    </div>
  )
}
