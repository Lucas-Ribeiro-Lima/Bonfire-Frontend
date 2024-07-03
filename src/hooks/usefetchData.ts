'use client'
import { api } from '@/services/apiClient'
import useSWR from 'swr'

/**
 *
 * @deprecated
 * @param url
 * @returns
 *
 */
export function useFetchData<T = unknown>(url: string) {
  const { data, error, isLoading, mutate } = useSWR<T, Error>(url, async () => {
    const response = await api.get<T>(url)
    return response.data
  })

  return { data, error, isLoading, mutate }
}
