import axios, { AxiosInstance, AxiosError } from 'axios'

export interface ApiErrorResponse {
  message: string
  statusCode: number
  error: string
  code: string
}

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

const getTokenFromCookies = () => {
  if (typeof document === 'undefined') return null

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === 'session') {
      return value
    }
  }
  return null
}

api.interceptors.request.use(
  async (config) => {
    const token = getTokenFromCookies()

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
