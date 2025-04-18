import axios, { AxiosInstance, AxiosError } from 'axios'
import { cookies as nextCookies } from 'next/headers'

import { env } from './env'

export interface ApiErrorResponse {
  message: string
  statusCode: number
  error: string
  code: string
}

export const api: AxiosInstance = axios.create({
  baseURL: env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

api.interceptors.request.use(
  async (config) => {
    const cookies = await nextCookies()
    const token = cookies.get('session')?.value

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error instanceof AxiosError && error.response?.data) {
      const errorData = error.response.data as ApiErrorResponse
      error.message = errorData.message || error.message
    }

    return Promise.reject(error)
  },
)

export default api
