import { ImportFormData } from '@/schemas/ImportFormSchema'
import { api } from '@/services/apiClient'
import { toast } from 'sonner'

export async function postAuto({ file }: ImportFormData, option: number) {
  const body = new FormData()

  try {
    if (file) return console.log(`Error: Auto vazio`)

    body.append('file', file, file?.name)

    if (option === 1) {
      api
        .post('autoInfracao/primeiraInstancia', body)
        .then((response) => {
          if (response.status === 200) {
            toast('Arquivo importado com sucesso')
            return console.log(response.status, response.data)
          } else {
            toast('Erro ao importar o arquivo')
          }
        })
        .catch((error: Error) => {
          toast(error.message)
        })
    }

    if (option === 2) {
      api
        .post('autoInfracao/segundaInstancia', body)
        .then((response) => {
          if (response.status === 200) {
            toast('Arquivo importado com sucesso')
            return console.log(response.status, response.data)
          } else {
            toast('Erro ao importar o arquivo')
          }
        })
        .catch((error: Error) => {
          toast(error.message)
        })
    }
  } catch (error) {
    return console.log('Error: ', error)
  }
}
