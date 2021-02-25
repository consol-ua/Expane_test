import { request, gql } from "graphql-request";
export type Client = {
  id: number
  firstName: string
  lastName: string
  phone?: string
  avatarUrl?: string
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

export type AddClient = {
  firstName: string
  lastName: string
  phone?: string
  avatarUrl?: string
}

type AddClientRes = {
  addClient: {
    id: number
  }
}

export const addClient = (variable: AddClient) => {
  const mutation = gql`
  mutation testAddClient($firstName: String!
    $lastName: String!
    $phone: String
    $avatarUrl: String){
    addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl){
      id
    }
  }
  `;
  return request<AddClientRes>(endpoint, mutation, variable).then(data => data.addClient)
}

export type UpdateClient = {
  updateClient: {
    id: number
    firstName?: string
    lastName?: string
    phone?: string
    avatarUrl?: string
  }
}

export const updateClient = (variable: Client) => {
  const mutation = gql`
  mutation testUpdateClient(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $phone: String
    $avatarUrl: String){
    updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl){
      id
      firstName
      lastName
      phone
      avatarUrl
    }
  }
  `;
  return request<UpdateClient>(endpoint, mutation, variable).then(data => data.updateClient)
}