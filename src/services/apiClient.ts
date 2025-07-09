import axios from 'axios'

function ApiClient() {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  return api
}

export const api = ApiClient()
