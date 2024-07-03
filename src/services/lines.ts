import { SetNotificationLocalStorage } from '@/components/UI/notificationBar'
import { convertToBoolean } from '@/lib/utils'
import { LinesFrameData, LoadLines } from '@/schemas/LinesFrameDataSchema'
import { eventT } from '@/schemas/notificationSchema'
import { TApiResponse } from '@/schemas/responseSchema'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import useSWR from 'swr'
import { api } from './apiClient'

export function GetLines() {
  const { data, mutate } = useSWR<LinesFrameData[]>('/linha', async () => {
    const response = await api.get<LoadLines>('/linha')
    return response.data.linha
  })

  data?.forEach((linha) => {
    linha.COMPARTILHADA = convertToBoolean(linha.COMPARTILHADA)
    linha.LINH_ATIV_EMPR = convertToBoolean(linha.LINH_ATIV_EMPR)
  })

  return { data, mutate }
}

export async function UpdateLine({
  COMPARTILHADA,
  COD_LINH,
  LINH_ATIV_EMPR,
  ID_OPERADORA,
}: LinesFrameData) {
  const event: eventT = {}
  const linha = [{ COD_LINH, ID_OPERADORA, COMPARTILHADA, LINH_ATIV_EMPR }]

  try {
    const response = await api.patch<TApiResponse>('/linha', linha)
    if (response.status === 200) event.message = response.data.message
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  } finally {
    SetNotificationLocalStorage({
      document: COD_LINH,
      message: event.message,
    })
    toast(event.message)
  }
  return linha[0]
}

export async function IncludeLine({
  COMPARTILHADA,
  COD_LINH,
  LINH_ATIV_EMPR,
  ID_OPERADORA,
}: LinesFrameData) {
  const linha = [{ COD_LINH, ID_OPERADORA, COMPARTILHADA, LINH_ATIV_EMPR }]
  const event: eventT = {}

  event.document = COD_LINH

  try {
    const response = await api.post<TApiResponse>('/linha', linha)
    if (response.status === 201) event.message = response.data.message
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  } finally {
    SetNotificationLocalStorage({
      document: event.document,
      message: event.message,
    })
    toast(event.message)
  }
  return linha[0]
}

export async function DeleteLine(COD_LINH: string) {
  toast(`Deletando a linha ${COD_LINH}`)
  return COD_LINH
}
