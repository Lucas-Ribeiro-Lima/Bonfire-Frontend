'use client'

import { useInfractionsFirst } from '@/hooks/useInfractions'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function InfractionLayout() {
  // Data fetch
  const { data, setDate } = useInfractionsFirst()

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
