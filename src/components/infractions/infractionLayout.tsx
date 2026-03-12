'use client'

import { DEFAULTTIMEOUT } from '@/lib/utils'
import { AutoData } from '@/schemas/Infractions'
import { GetAutoInfractions } from '@/services/infractions'
import { useCallback, useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function InfractionLayout() {
  // Data fetch
  const [date, setDate] = useState('')
  const [ai, setAi] = useState('')
  const [infracoes, setInfracoes] = useState<AutoData[]>([])
  const [scheduleId, setScheduleId] = useState<NodeJS.Timeout | null>(null)

  const wrapper = useCallback(
    async function wrapper() {
      const res = await GetAutoInfractions(date, ai)
      setInfracoes(res)
      setScheduleId(null)
    },
    [date, ai],
  )

  useEffect(() => {
    if (scheduleId) clearTimeout(scheduleId)
    const id = setTimeout(wrapper, DEFAULTTIMEOUT)

    return () => clearTimeout(id)
  }, [date, ai])

  return (
    <DataTable
      columns={columns}
      data={infracoes}
      setDate={setDate}
      setAi={setAi}
    ></DataTable>
  )
}
