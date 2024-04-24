'use client'

import { FetchData } from '@/hooks/fetchData'
import { DEFAULTDATA } from '@/lib/utils'
import { useState } from 'react'
import { autoData, columns } from './columns'
import { DataTable } from './data-table'

interface autosFetch {
  autos: autoData[]
}

export default function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState(DEFAULTDATA)
  const { data } = FetchData<autosFetch>(
    `/autoInfracao/primeiraInstancia/${date}`,
  )

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
