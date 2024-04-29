import axios from 'axios'

function ApiClient() {
  const api = axios.create({
    baseURL: `http://localhost:5000`,
    timeout: 10000,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  return api
}

export const api = ApiClient()
