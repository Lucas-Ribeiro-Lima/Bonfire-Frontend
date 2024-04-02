import { ImportFormData } from '@/components/schemas/ImportFormSchema'
import { ApiClient } from '@/services/apiClient'
import { toast } from 'sonner'

export async function postAuto({ auto }: ImportFormData, option: number) {
  const body = new FormData()

  try {
    if (!auto!.file) return console.log(`Error: Auto vazio`)

    body.append('file', auto!.file, auto!.file.name)

    if (option === 1) {
      ApiClient.post('autoInfracao/primeiraInstancia', body).then(
        (response) => {
          if (response.status === 200) {
            toast('Arquivo importado com sucesso')
            return console.log(response.status, response.data)
          } else {
            toast('Erro ao importar o arquivo')
          }
        },
      )
    }

    if (option === 2) {
      ApiClient.post('autoInfracao/segundaInstancia', body).then((response) => {
        if (response.status === 200) {
          toast('Arquivo importado com sucesso')
          return console.log(response.status, response.data)
        } else {
          toast('Erro ao importar o arquivo')
        }
      })
    }
  } catch (error) {
    return console.log('Error: ', error)
  }
}
