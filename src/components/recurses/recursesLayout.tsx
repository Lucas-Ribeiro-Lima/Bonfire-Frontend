'use client'

import { GetAutoSecondInstance } from '@/services/infractions'
import { useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function RecursesLayout() {
  const [date, setDate] = useState<string>('')
  const [ata, setAta] = useState<string>('')
  const { data } = GetAutoSecondInstance(date, ata)

  return (
    <DataTable
      columns={columns}
      data={data || []}
      setDate={setDate}
      setAta={setAta}
    ></DataTable>
  )
}
