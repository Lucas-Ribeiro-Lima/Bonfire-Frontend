import { convertToBoolean } from '@/lib/utils'
import { EventT } from '@/schemas/NotificationSchema'
import { TApiResponse } from '@/schemas/ResponseSchema'
import { LoadVehicles, VehiclesData } from '@/schemas/VechicleSchema'
import { AxiosError } from 'axios'
import useSWR from 'swr'
import { api } from './apiClient'

export function GetVehicles() {
  const { data, mutate } = useSWR<VehiclesData[]>('/veiculos', async () => {
    const response = await api.get<LoadVehicles>('/veiculos')
    return response.data.veiculos
  })

  data?.forEach((vehicle) => {
    vehicle.VEIC_ATIV_EMPR = convertToBoolean(vehicle.VEIC_ATIV_EMPR)
  })

  return { data, mutate }
}

export async function UpdateVehicles({
  IDN_PLAC_VEIC,
  NUM_VEIC,
  VEIC_ATIV_EMPR,
}: VehiclesData) {
  const data = [{ IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR }]
  const event: EventT = {}

  event.document = NUM_VEIC
  try {
    const response = await api.patch<TApiResponse>('/veiculos', data)
    if (response.status === 202) {
      event.message = response.data.message
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  }
  return { vehicle: data[0], event }
}

export async function InsertVehicles({
  IDN_PLAC_VEIC,
  NUM_VEIC,
  VEIC_ATIV_EMPR,
}: VehiclesData) {
  const data = [
    {
      IDN_PLAC_VEIC,
      NUM_VEIC,
      VEIC_ATIV_EMPR,
    },
  ]
  const event: EventT = {}

  event.document = NUM_VEIC

  try {
    const response = await api.post<TApiResponse>('/veiculos', data)
    if (response.status === 201) {
      event.message = response.data.message
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  }
  return { vehicle: data[0], event }
}

export async function DeleteVehicles(NUM_VEIC: string) {
  const event: EventT = {}

  event.document = NUM_VEIC

  try {
    const response = await api.delete<TApiResponse>(`/veiculos/${NUM_VEIC}`)
    if (response.status === 202) event.message = response.data.message
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  }

  return { NUM_VEIC, event }
}
