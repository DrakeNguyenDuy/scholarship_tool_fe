import { PathRoute } from '../constants/PathRoute'
import { LoginResponse } from '../types/LoginResponse'
import { LoginSchemaType } from '../utils/rules'
import http from './Http'

export const AuthApi = {
  login: (body: LoginSchemaType) => {
    return http.post<LoginResponse>(PathRoute.login, body)
  }
}
