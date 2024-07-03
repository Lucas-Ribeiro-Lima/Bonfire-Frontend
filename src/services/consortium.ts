import { convertToBoolean } from '@/lib/utils'
import { ConsortiumFrameData, LoadConsortium } from '@/schemas/consortiumSchema'
import useSWR from 'swr'
import { api } from './apiClient'

export function GetConsortiums() {
  const { data, mutate } = useSWR<ConsortiumFrameData[]>(
    '/consorcio',
    async () => {
      const response = await api.get<LoadConsortium>('/consorcio')
      return response.data.consorcios
    },
  )

  data?.forEach((consorcio) => {
    consorcio.compartilhado = convertToBoolean(consorcio.compartilhado)
  })

  return { data, mutate }
}
