import { logger } from 'firebase-functions'
import { captureException as capture } from '@sentry/node'

export const captureException = (e: Error) => {
  if (e == null) return capture(new Error('Trying to capture undefined error'))

  logger.error(e)

  capture(e)
}
