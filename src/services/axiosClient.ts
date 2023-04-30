import axios, { AxiosInstance } from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const MAIN_ENDPOINT = publicRuntimeConfig.APP_API_URL

const axiosClient: AxiosInstance = axios.create({
  baseURL: MAIN_ENDPOINT,
  timeout: 120000, // Waiting 2m for request timeout
  headers: {
    'Cache-Control': 'no-cache',
  },
})

axiosClient.interceptors.request.use(function handleRequest(reqConfig) {
  const configOverride = reqConfig
  if (typeof window === 'undefined') return configOverride
  const token = localStorage.getItem('token')

  if (token) {
    configOverride.headers.Authorization = `Bearer ${token}`
  }

  return configOverride
})

export default axiosClient
