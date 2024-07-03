'use client'

import { DEFAULTDATA } from '@/lib/utils'
import { GetAutoFirstInstance } from '@/services/infractions'
import { useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState(DEFAULTDATA)
  const { data } = GetAutoFirstInstance(date)

  return (
    <div className="flex w-full flex-col">
      <DataTable
        columns={columns}
        data={data?.autos || []}
        setDate={setDate}
      ></DataTable>
    </div>
  )
}
