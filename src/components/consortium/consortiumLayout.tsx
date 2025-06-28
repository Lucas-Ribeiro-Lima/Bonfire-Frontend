'use client'

import { GetConsortiums } from '@/services/consortium'
import { columns } from './columns'
import { DataTable } from './data-table'

export function ConsortiumLayout() {
  const { data } = GetConsortiums()
  return <DataTable columns={columns} data={data || []}></DataTable>
}
