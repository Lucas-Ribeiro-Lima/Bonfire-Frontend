import axios from 'axios'

export const ApiClient = axios.create({
  baseURL: `http://172.22.0.17:3332`,
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
})
