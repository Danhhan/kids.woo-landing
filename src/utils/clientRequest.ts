import axios, { AxiosInstance } from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const MAIN_ENDPOINT = publicRuntimeConfig.APP_API_URL

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: MAIN_ENDPOINT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const clientRequest = new Http().instance

export default clientRequest
