'use client'

import { FetchInfractionsFirstInstance } from '@/hooks/fetchData'
import { DEFAULTDATA } from '@/lib/utils'
import { useState } from 'react'
import { Error } from '../ui/error'
import { autosData, columns } from './columns'
import { DataTable } from './data-table'

export default function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState(DEFAULTDATA)

  const {
    data: { autos },
    error,
  } = FetchInfractionsFirstInstance<autosData[]>(
    `/autoInfracao/primeiraInstancia/${date}`,
  )

  if (error) return <Error></Error>

  return (
    <div className="flex w-5/6 flex-col">
      <DataTable
        columns={columns}
        data={autos || []}
        setDate={setDate}
      ></DataTable>
    </div>
  )
}
