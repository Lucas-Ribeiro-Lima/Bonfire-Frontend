import { ConsortiumFrameData, LoadConsortium } from '@/schemas/ConsortiumSchema'
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

  return { data, mutate }
}
