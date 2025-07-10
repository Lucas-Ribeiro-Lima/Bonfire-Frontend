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
  recurses: recurseData[]
}

export function GetAutoFirstInstance(date?: string, ai?: string) {
  const map = new Map()

  if (date) {
    map.set('date', date)
  }

  if (ai) {
    map.set('ai', ai)
  }

  const params = Object.fromEntries(map.entries())

  const { data } = useSWR<autoData[]>(
    '/autoInfracao/primeiraInstancia',
    async () => {
      const response = await api.get<ILoadAutos>(
        '/autoInfracao/primeiraInstancia',
        {
          params,
        },
      )

      return response.data.autos
    },
  )

  return { data }
}

export function GetAutoSecondInstance(date: string, ata: string) {
  const map = new Map()

  if (date) {
    map.set('date', date)
  }

  if (ata) {
    map.set('ata', ata)
  }

  const params = Object.fromEntries(map.entries())

  const { data } = useSWR<recurseData[]>(
    '/autoInfracao/segundaInstancia',
    async () => {
      const response = await api.get<ILoadRecurses>(
        `/autoInfracao/segundaInstancia`,
        {
          params,
        },
      )
      return response.data.recurses
    },
  )

  return { data }
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
