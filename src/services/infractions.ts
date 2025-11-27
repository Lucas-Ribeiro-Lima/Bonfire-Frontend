import { TResponseImport } from '@/schemas/ImportFormSchema'
import { AutoData } from '@/schemas/Infractions'
import { EventT } from '@/schemas/NotificationSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'

interface ILoadAutos {
  autos: AutoData[]
}

export async function GetAutoInfractions(
  date?: string,
  ai?: string,
): Promise<AutoData[]> {
  const map = new Map()

  if (date) map.set('date', date)

  if (ai) map.set('ai', ai)

  const { data } = await api.get<ILoadAutos>('/infracao', {
    params: Object.fromEntries(map.entries()),
  })

  return data.autos
}

export async function PostAutoInfraction(file: File) {
  if (!file) throw new Error('Auto vazio')

  const event: EventT = {}
  const body = new FormData()
  event.document = file.name

  body.append('file', file, file.name)

  try {
    const response = await api.post<TResponseImport>('infracao/csv', body, {
      timeout: 320000,
    })
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
