'use client'

import { GetConsortiums } from '@/services/consortium'
import { DataTable } from './data-table'
import { columns } from './columns'

export default function ConsortiumLayout() {
  const { data } = GetConsortiums()
  return <DataTable columns={columns} data={data || []}></DataTable>
}
