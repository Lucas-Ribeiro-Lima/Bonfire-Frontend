'use client'
import { ApiClient } from '@/services/apiClient'
import useSWR from 'swr'

export function FetchInfractionsFirstInstance<Data = unknown>(url: string) {
  const { data, error, isLoading } = useSWR<Data>(url, async () => {
    const response = await ApiClient.get(`${url}`)
    return response.data
  })

  return { data, error, isLoading }
}

export function FetchData<Data = unknown>(url: string) {
  const { data, error, isLoading } = useSWR<Data>(url, async () => {
    const response = await ApiClient.get(url)
    return response.data
  })

  return { data, error, isLoading }
}
