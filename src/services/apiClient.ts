import axios from 'axios'
import { getSession } from 'next-auth/react'

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
  headers: {
    'X-Custom-Header': 'foobar',
  },
})

api.interceptors.request.use(async (config) => {
  const session = await getSession()

  if(session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }

  return config
})
