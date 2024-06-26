import { SetNotificationLocalStorage } from '@/components/UI/notificationBar'
import { TResponseImport } from '@/schemas/ImportFormSchema'
import { TCustomError } from '@/schemas/errorsSchema'
import { eventT } from '@/schemas/notificationSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export async function postAutoFirstInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: eventT = {}

  const body = new FormData()
  body.append('file', file, file.name)

  event.document = file.name

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

export async function PostAutoSecondInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: eventT = {}

  const body = new FormData()
  body.append('file', file, file.name)

  event.document = file.name

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

/**
 * PostAuto
 * @param file
 * @param option
 * @deprecated
 */
export async function postAuto(file: File, option: number) {
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
