'use client'
import { api } from '@/services/apiClient'
import useSWR from 'swr'

export function FetchData<T = unknown>(url: string) {
  const { data, error, isLoading } = useSWR<T, Error>(url, async () => {
    const response = await api.get<T>(url)
    return response.data
  })

  return { data, error, isLoading }
}
