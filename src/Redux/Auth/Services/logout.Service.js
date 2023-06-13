import { WEB_HTTP_CONTEXT } from '@am92/web-http'
import { asHttp } from '~/src/Configurations/WebHttp'
import serviceActionCreatorWithTokenRotation from '~/src/Redux/serviceActionCreatorWithTokenRotation'
import { logoutTraceActions, logoutServiceName } from '../Actions'

async function logout() {
  const refreshToken = asHttp.context.get(WEB_HTTP_CONTEXT.REFRESH_TOKEN)
  const reqBody = { refreshToken }

  const options = {
    url: '/auth/logout',
    method: 'POST',
    data: reqBody
  }

  const response = await asHttp.request(options)
  const { data: body } = response
  const { data } = body
  return data
}

const logoutService = serviceActionCreatorWithTokenRotation(
  logoutTraceActions,
  logout
)

export default logoutService
export { logoutServiceName }
