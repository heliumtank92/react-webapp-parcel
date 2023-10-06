import { WEB_HTTP_CONTEXT } from '@am92/web-http'
import { asHttp } from '~/src/Configurations/WebHttp'
import serviceActionCreator from '~/src/Redux/serviceActionCreator'
import { loginTraceActions, loginServiceName } from '../Actions'

async function login(reqData) {
  const options = {
    url: '/auth/login',
    method: 'POST',
    data: reqData
  }

  const response = await asHttp.request(options)
  const { data: body } = response
  const { data } = body

  const { tokens = {} } = data
  const { accessToken = '', refreshToken = '' } = tokens
  asHttp.context.set(WEB_HTTP_CONTEXT.ACCESS_TOKEN, accessToken)
  asHttp.context.set(WEB_HTTP_CONTEXT.REFRESH_TOKEN, refreshToken)

  return data
}

const loginService = serviceActionCreator(loginTraceActions, login)

export default loginService
export { loginServiceName }
