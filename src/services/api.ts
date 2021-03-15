import { QueryClient } from 'react-query'
import { GraphQLClient } from 'graphql-request'
import { Variables } from 'graphql-request/dist/types'
import { getAuthToken } from 'logic/auth'
import { config } from 'config'

console.log('GQL endpoint:', config.HASURA_ENDPOINT)
const client = new GraphQLClient(config.HASURA_ENDPOINT)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

export const request = async <T = any, V = Variables>(
  document: string,
  variables?: V,
): Promise<T> => {
  const token = await getAuthToken()
  client.setHeader('Authorization', 'Bearer ' + token)
  return client.request(document, variables)
}
