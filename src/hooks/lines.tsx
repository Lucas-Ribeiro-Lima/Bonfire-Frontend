import { SetNotificationLocalStorage } from '@/components/UI/notificationBar'
import { convertToBoolean } from '@/lib/utils'
import { LinesFrameData, LoadLines } from '@/schemas/LinesFrameDataSchema'
import { TCustomError } from '@/schemas/errorsSchema'
import { eventT } from '@/schemas/notificationSchema'
import { TApiResponse } from '@/schemas/responseSchema'
import { api } from '@/services/apiClient'
import { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'sonner'
import useSWR from 'swr'

export function useGetLines() {
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

export async function patchLine({
  COD_LINH,
  ID_OPERADORA,
  COMPARTILHADA,
  LINH_ATIV_EMPR,
}: LinesFrameData) {
  const event: eventT = {}
  const linha = [{ COD_LINH, ID_OPERADORA, COMPARTILHADA, LINH_ATIV_EMPR }]

  event.document = COD_LINH

  await api
    .patch('/linha', linha)
    .then((response: AxiosResponse<TApiResponse>) => {
      if (response.status === 200) {
        event.message = response.data.message
      }
    })
    .catch((error: AxiosError<TCustomError>) => {
      event.message = error.response?.data.message
    })
    .finally(() => {
      SetNotificationLocalStorage({
        document: event.document,
        message: event.message,
      })
      toast(event.message)
    })
}
