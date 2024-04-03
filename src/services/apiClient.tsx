import axios from 'axios'

function ApiClient() {
  const api = axios.create({
    baseURL: `http://192.168.0.11:3332`,
    timeout: 30000,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  return api
}

export const api = ApiClient()
