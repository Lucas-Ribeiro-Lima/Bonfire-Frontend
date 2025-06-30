import { TCustomError } from '@/schemas/ErrorsSchema'
import { TResponseImport } from '@/schemas/ImportFormSchema'
import { autoData, recurseData } from '@/schemas/Infractions'
import { EventT } from '@/schemas/NotificationSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'
import useSWR from 'swr'

interface ILoadAutos {
  autos: autoData[]
}

interface ILoadRecurses {
  autos: recurseData[]
}

export function GetAutoFirstInstance(date: string) {
  const { data, error, isLoading } = useSWR<autoData[]>(
    `/autoInfracao/primeiraInstancia/${date}`,
    async () => {
      const response = await api.get<ILoadAutos>(
        `/autoInfracao/primeiraInstancia/${date}`,
      )
      return response.data.autos
    },
  )
  return { data, error, isLoading }
}

export function GetAutoSecondInstance(datePubl: string) {
  const { data, error, isLoading } = useSWR<recurseData[]>(
    `/autoInfracao/segundaInstancia/${datePubl}`,
    async () => {
      const response = await api.get<ILoadRecurses>(
        `/autoInfracao/segundaInstancia/${datePubl}`,
      )
      return response.data.autos
    },
  )
  return { data, error, isLoading }
}

export async function PostAutoFirstInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: EventT = {}
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
  }

  return { event }
}

export async function PostAutoSecondInstance(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: EventT = {}
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
  }

  return { event }
}

/**
 * PostAuto
 * @param file
 * @param option
 * @deprecated
 */
export async function PostAuto(file: File, option: number) {
  if (!file) throw new Error('Auto vazio')

  const event: EventT = {}

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
  }
}
