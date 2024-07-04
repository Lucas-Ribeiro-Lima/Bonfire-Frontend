import { DEFAULTDATA } from '@/lib/utils'
import { GetAutoSecondInstance } from '@/services/infractions'
import { useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function RecursesLayout() {
  const [date, setDate] = useState<string>(DEFAULTDATA)
  const { data } = GetAutoSecondInstance(date)

  return (
    <DataTable
      columns={columns}
      data={data || []}
      setDate={setDate}
    ></DataTable>
  )
}
