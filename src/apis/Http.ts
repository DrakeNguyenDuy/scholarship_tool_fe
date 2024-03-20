import axios, { AxiosInstance, AxiosResponse, AxiosError, HttpStatusCode } from 'axios'
import { WorkingWithLS } from '../utils/LocalStorage'
import { KeyLocalStorage } from '../constants/KeyLocalService'
import { PathRoute } from '../constants/PathRoute'
// eslint-disable-next-line import/no-unresolved
import { LoginResponse } from '../types/LoginResponse'
import { urlApi } from '../constants/Config'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = WorkingWithLS.getFromLs(KeyLocalStorage.access_token || null)
    this.instance = axios.create({
      baseURL: urlApi,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken
        }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse<LoginResponse>) => {
        const { url } = response.config
        if (url && [PathRoute.login as string].includes(url) && response.status == HttpStatusCode.Ok) {
          const data = response.data
          this.accessToken = data.access_token
          WorkingWithLS.saveToLS([
            { key: KeyLocalStorage.access_token, value: this.accessToken },
            {
              key: KeyLocalStorage.permissions,
              value: JSON.stringify(data.permissions) || ''
            }
          ])
        } else if (url === PathRoute.logout) {
          this.accessToken = ''
          WorkingWithLS.clearFromLS(['access_token', 'user'])
        }
        return response
      },
      (error: AxiosError<{ message: string }>) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // toast.error(error.response?.data.message || error.message)
          console.log(error.response?.data.message || error.message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          this.accessToken = ''
          WorkingWithLS.clearFromLS(['access_token', 'user'])
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
