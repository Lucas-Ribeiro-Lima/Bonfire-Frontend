'use client'

import { FetchInfractionsFirstInstance } from '@/hooks/fetchData'
import { DEFAULTDATA } from '@/lib/utils'
import { useState } from 'react'
import { toast } from 'sonner'
import { autoData, columns } from './columns'
import { DataTable } from './data-table'

interface autosFetch {
  autos: autoData[]
}

export default function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState(DEFAULTDATA)

  const { data, error } = FetchInfractionsFirstInstance<autosFetch>(
    `/autoInfracao/primeiraInstancia/${date}`,
  )

  if (error) return toast(error.message)

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
