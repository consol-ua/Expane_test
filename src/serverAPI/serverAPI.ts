import { request, gql } from "graphql-request";
export type Client = {
  id: number
  firstName: String
  lastName: String
  phone?: String
  avatarUrl?: String
}
type GetClients = {
  getClients: Array<Client>
}

const endpoint = 'https://test-task.expane.pro/api/graphql'

export const getClients = () => {
  const query = gql`
    {
      getClients{
        id
        firstName
        lastName
        phone
        avatarUrl
      }
    }
  `;
  return request<GetClients>(endpoint, query).then(data => data.getClients)
}