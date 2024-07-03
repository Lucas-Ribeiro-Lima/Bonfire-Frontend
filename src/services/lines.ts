import { SetNotificationLocalStorage } from '@/components/UI/notificationBar'
import { linesContext } from '@/contexts/lineContext'
import { LinesFrameData, LoadLines } from '@/schemas/LinesFrameDataSchema'
import { eventT } from '@/schemas/notificationSchema'
import { TApiResponse } from '@/schemas/responseSchema'
import { AxiosError } from 'axios'
import { useContext } from 'react'
import { toast } from 'sonner'
import { api } from './apiClient'
import { convertToBoolean } from '@/lib/utils'
import useSWR from 'swr'

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
  const { data, mutate } = useContext(linesContext)
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

  const updatedData = data?.map((line) => {
    if (line.COD_LINH === COD_LINH) {
      return { ...line, COMPARTILHADA, LINH_ATIV_EMPR }
    }
    return line
  })
  mutate(updatedData, false)
}

export async function IncludeLine({
  COMPARTILHADA,
  COD_LINH,
  LINH_ATIV_EMPR,
  ID_OPERADORA,
}: LinesFrameData) {
  const { data, mutate } = useContext(linesContext)
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

  if (data) {
    const updatedData = [
      ...data,
      { COD_LINH, ID_OPERADORA, COMPARTILHADA, LINH_ATIV_EMPR },
    ]
    mutate(updatedData, false)
  }
}

export async function DeleteLine(COD_LINH: string) {
  toast(`Deletando a linha ${COD_LINH}`)
}
