import { SetNotificationLocalStorage } from '@/components/UI/notificationBar'
import { autoData } from '@/components/infractions/columns'
import { TResponseImport } from '@/schemas/ImportFormSchema'
import { TCustomError } from '@/schemas/errorsSchema'
import { eventT } from '@/schemas/notificationSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import useSWR from 'swr'

interface ILoadAutos {
  autos: autoData[]
}

export function GetAutoFirstInstance(date: string) {
  const { data, error, isLoading } = useSWR<ILoadAutos>(
    `/autoInfracao/primeiraInstancia/${date}`,
    async () => {
      const response = await api.get(`/autoInfracao/primeiraInstancia/${date}`)
      return response.data
    },
  )
  return { data, error, isLoading }
}

export async function PostAutoFirstInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: eventT = {}
  const body = new FormData()
  event.document = file.name

  body.append('file', file, file.name)

  try {
    const response = await api.post<TResponseImport>(
      'autoInfracao/primeiraInstanciaCSV',
      body,
      { timeout: 320000 },
    )
    if (response.status === 200) {
      event.message = response.data.message
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  } finally {
    toast(event.message)
    SetNotificationLocalStorage(event)
  }
}

export async function PostAutoSecondInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: eventT = {}
  const body = new FormData()
  event.document = file.name

  body.append('file', file, file.name)

  try {
    const response = await api.post<TResponseImport>(
      'autoInfracao/segundaInstancia',
      body,
      { timeout: 320000 },
    )
    if (response.status === 200) {
      event.message = `${response.data.message} Quantidade: ${response.data.counter}`
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      event.message = error.response?.data.message
    }
  } finally {
    toast(event.message)
    SetNotificationLocalStorage(event)
  }
}

/**
 * PostAuto
 * @param file
 * @param option
 * @deprecated
 */
export async function PostAuto(file: File, option: number) {
  if (!file) throw new Error('Auto vazio')

  const event: eventT = {}

  const body = new FormData()
  body.append('file', file, file.name)

  event.document = file.name

  if (option === 1) {
    await api
      .post<TResponseImport>('autoInfracao/primeiraInstanciaCSV', body, {
        timeout: 320000,
      })
      .then((response) => {
        if (response.status === 200) {
          event.message = response.data.message
        }
      })
      .catch((error: AxiosError<TCustomError>) => {
        event.message = error.response?.data.message
      })
      .finally(() => {
        toast(event.message)
        SetNotificationLocalStorage(event)
      })
  }

  if (option === 2) {
    await api
      .post<TResponseImport>('autoInfracao/segundaInstancia', body, {
        timeout: 320000,
      })
      .then((response) => {
        if (response.status === 200) {
          event.message = `${response.data.message} Quantidade: ${response.data.counter}`
        }
      })
      .catch((error: AxiosError<TCustomError>) => {
        event.message = error.response?.data.message
      })
      .finally(() => {
        toast(event.message)
        SetNotificationLocalStorage(event)
      })
  }
}
