import * as functions from 'firebase-functions'

export const config = {
  ROOT_TOKEN: '9D55B2255CE28A6622B3C1ADB84A1',
  ENV: functions.config().config?.env === 'production' ? 'production' : 'staging',
  // IS_TEST: typeof jest !== 'undefined',
}
