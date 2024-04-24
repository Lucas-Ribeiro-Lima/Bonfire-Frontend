import { TResponseImport } from '@/schemas/ImportFormSchema'
import { TCustomError } from '@/schemas/errorsSchema'
import { api } from '@/services/apiClient'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export async function postAuto(file: File, option: number) {
  if (!file) throw new Error('Auto vazio')

  const body = new FormData()
  body.append('file', file, file.name)

  if (option === 1) {
    await api
      .post<TResponseImport>('autoInfracao/primeiraInstanciaCSV', body, {
        timeout: 320000,
      })
      .then((response) => {
        if (response.status === 200) {
          toast(`${response.data.message}`)
        }
      })
      .catch((error: AxiosError<TCustomError>) => {
        console.log(error)
        toast(error.response?.data.message)
      })
  }

  if (option === 2) {
    await api
      .post<TResponseImport>('autoInfracao/segundaInstancia', body, {
        timeout: 320000,
      })
      .then((response) => {
        if (response.status === 200) {
          toast(`${response.data.message} Quantidade: ${response.data.counter}`)
        }
      })
      .catch((error: AxiosError<TCustomError>) => {
        console.log(error)
        toast(error.response?.data.message)
      })
  }
}
