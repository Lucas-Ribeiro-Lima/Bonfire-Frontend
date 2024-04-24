import {
  responseImportFirstSchema,
  responseImportSecondSchema,
} from '@/schemas/ImportFormSchema'
import { errorSchema } from '@/schemas/errorsSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export async function postAuto(file: File, option: number) {
  const body = new FormData()
  try {
    if (!file) throw new Error('Auto vazio')

    body.append('file', file, file.name)

    if (option === 1) {
      api
        .post('autoInfracao/primeiraInstanciaCSV', body, { timeout: 1800000 })
        .then((response) => {
          if (response.status === 200) {
            const body = responseImportFirstSchema.parse(response.data)
            toast(`${body.message}`)
          }
        })
        .catch((error: AxiosError) => {
          console.error(error.response?.data)
          const data = errorSchema.parse(error.response?.data)
          toast(data.message)
        })
    }

    if (option === 2) {
      api
        .post('autoInfracao/segundaInstancia', body, { timeout: 180000 })
        .then((response) => {
          if (response.status === 200) {
            const data = responseImportSecondSchema.parse(response.data)
            toast(`${data.message}, ${data.counter}`)
          }
        })
        .catch((error: AxiosError) => {
          console.error(error.response?.data)
          const data = errorSchema.parse(error.response?.data)
          toast(data.message)
        })
    }
  } catch (error: unknown) {
    return console.error(error)
  }
}
