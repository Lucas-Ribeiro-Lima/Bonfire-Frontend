import axios from 'axios'

export const ApiClient = axios.create({
  baseURL: `http://localhost:5000`,
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
})
