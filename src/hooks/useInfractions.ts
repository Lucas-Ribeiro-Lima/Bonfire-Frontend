import { DEFAULTDATA } from '@/lib/utils'
import { GetAutoFirstInstance } from '@/services/infractions'
import { useState } from 'react'

export function useInfractionsFirst() {
  const [date, setDate] = useState(DEFAULTDATA)
  const { data } = GetAutoFirstInstance(date)

  return { data, setDate }
}
