'use client'

import { GetAutoFirstInstance } from '@/services/infractions'
import { useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState('')
  const [ai, setAi] = useState('')
  const { data } = GetAutoFirstInstance(date, ai)

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={data || []}
        setDate={setDate}
        setAi={setAi}
      ></DataTable>
    </div>
  )
}
