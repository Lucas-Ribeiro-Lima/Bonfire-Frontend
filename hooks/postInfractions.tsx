import { ImportFormData } from '@/components/import/importFormPrimeiraInstancia'
import { ApiClient } from '@/services/apiClient'

export async function postAuto({ auto }: ImportFormData, option: number) {
  const body = new FormData()

  try {
    if (!auto.file) return console.log(`Error: Auto vazio`)

    body.append('file', auto.file, auto.file?.name)

    if (option === 1) {
      ApiClient.post('autoInfracao/primeiraInstancia', body).then(
        (response) => {
          return console.log(response.status, response.data)
        },
      )
    }

    if (option === 2) {
      ApiClient.post('autoInfracao/segundaInstancia', body).then((response) => {
        return console.log(response.status, response.data)
      })
    }
  } catch (error) {
    return console.log('Error: ', error)
  }
}
