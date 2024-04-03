'use client'
import { api } from '@/services/apiClient'
import useSWR from 'swr'

export function FetchInfractionsFirstInstance<Data = unknown>(url: string) {
  const { data, error, isLoading } = useSWR<Data, Error>(url, async () => {
    const response = await api.get(`${url}`)
    return response.data
  })

  return { data, error, isLoading }
}

export function FetchData<Data = unknown>(url: string) {
  const { data, error, isLoading } = useSWR<Data, Error>(url, async () => {
    const response = await api.get(url)
    return response.data
  })

  return { data, error, isLoading }
}
