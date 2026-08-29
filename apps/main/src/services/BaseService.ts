import { BaseService as CoreBaseService, HttpClient, IHttpClient } from '@bonfire/core'
import { notify } from '@bonfire/ui'

const httpClient = new HttpClient({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
  onError: async () => {
    notify.error("Sistema temporariamente indisponível. Tente novamente mais tarde.")
  }
})

export class BaseService extends CoreBaseService {
  constructor(client: IHttpClient = httpClient) {
    super(client)
  }
}



