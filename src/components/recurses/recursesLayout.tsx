'use client'

import { DEFAULTTIMEOUT } from '@/lib/utils'
import { RecurseData } from '@/schemas/Infractions'
import { GetAutoSecondInstance } from '@/services/infractions'
import { useCallback, useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export function RecursesLayout() {
  const [date, setDate] = useState<string>('')
  const [ata, setAta] = useState<string>('')
  const [recursos, setRecursos] = useState<RecurseData[]>([])
  const [scheduleId, setScheduleId] = useState<NodeJS.Timeout | null>(null)

  const wrapper = useCallback(() => {
    GetAutoSecondInstance(date, ata).then((res) => {
      setRecursos(res)
    })
    setScheduleId(null)
  }, [date, ata])

  useEffect(() => {
    if (scheduleId) clearTimeout(scheduleId)
    const id = setTimeout(wrapper, DEFAULTTIMEOUT)
    return () => clearTimeout(id)
  }, [date, ata, wrapper])

  return (
    <DataTable
      columns={columns}
      data={recursos}
      setDate={setDate}
      setAta={setAta}
    ></DataTable>
  )
}
