import { Request, Response } from 'firebase-functions'
import admin from 'firebase-admin'

import { captureException } from './services/sentry'

// interface Params {
//   base64Image: string
//   userId: string
// }
export const uploadAvatarFunction = (request: Request, response: Response) => {
  try {
    const { base64Image, userId } = request.body.input
    const [imageMetaData, imageString] = base64Image.split(';base64,')
    // Trim "data:" from start
    const contentType = imageMetaData.substr(5)
    const [, extension] = contentType.split('/')

    const fileName = `avatars/${userId}.${extension}`
    const file = admin.storage().bucket().file(fileName)
    const imageBuffer = Buffer.from(imageString, 'base64')

    return file
      .save(imageBuffer, { public: true, contentType })
      .catch(e => {
        captureException(e)
        response.status(500).send('Error storing image')
      })

      .then(() => {
        const url = `https://storage.googleapis.com/${admin.storage().bucket().name}/${fileName}`
        response.status(200).send({ url })
      })
  } catch (e) {
    captureException(e)
    response.status(500).send(e)
  }
}
