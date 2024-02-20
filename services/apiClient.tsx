import { env } from '@/services/env'
import axios from 'axios'

export const ApiClient = axios.create({
  baseURL: `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`,
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
})
