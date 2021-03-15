import { gql } from 'graphql-request'
import { useMutation, useQuery } from 'react-query'
import { DBLocation, DBEmployee, DBService, DBClient } from '../interfaces'
import { queryClient, request } from '../services/api'

export function useFetchClients() {
  return useQuery(
    'clients',
    async (): Promise<DBClient[]> => {
      const { clients } = await request(
        gql`
          query {
            clients {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
      )
      return clients
    },
  )
}

export function useCreateClient() {
  return useMutation(
    async (dto: {
      firstName: string
      lastName: string
      phone?: string
      photo?: string
    }): Promise<DBClient> => {
      const { createClient } = await request(
        gql`
          mutation($firstName: String, $lastName: String, $phone: String, $photo: String) {
            insert_clients_one(
              object: { firstName: $firstName, lastName: $lastName, phone: $phone, photo: $photo }
            ) {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
        dto,
      )
      return createClient
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['clients']),
    },
  )
}

export function useUpdateClient() {
  return useMutation(
    async (dto: {
      id: string
      firstName?: string
      lastName?: string
      phone?: string
      photo?: string
    }): Promise<DBClient> => {
      const { updateClient } = await request(
        gql`
          mutation(
            $id: Int!
            $firstName: String
            $lastName: String
            $phone: String
            $photo: String
          ) {
            update_clients_by_pk(
              pk_columns: { id: $id }
              _set: { firstName: $firstName, lastName: $lastName, phone: $phone, photo: $photo }
            ) {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
        dto,
      )
      return updateClient
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['clients']),
    },
  )
}

export function useFetchLocations() {
  return useQuery('locations', async () => {
    const { locations } = await request(
      gql`
        query {
          locations {
            id
            name
          }
        }
      `,
    )
    return locations
  })
}

export function useCreateLocation() {
  return useMutation(
    async ({ name }: { name: string }): Promise<DBLocation> => {
      const { createLocation } = await request(
        gql`
          mutation($name: String) {
            insert_locations_one(object: { name: $name }) {
              id
              name
            }
          }
        `,
        { name },
      )
      return createLocation
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['locations']),
    },
  )
}

export function useUpdateLocation() {
  return useMutation(
    async (dto: { id: string; name?: string }): Promise<DBLocation> => {
      const { updateLocation } = await request(
        gql`
          mutation($id: Int!, $name: String) {
            update_locations_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
              id
              name
            }
          }
        `,
        dto,
      )
      return updateLocation
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['locations']),
    },
  )
}

export function useFetchEmployees() {
  return useQuery(
    'employees',
    async (): Promise<DBEmployee[]> => {
      const { employees } = await request(
        gql`
          query {
            employees {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
      )
      return employees
    },
  )
}

export function useCreateEmployee() {
  return useMutation(
    async (dto: {
      firstName: string
      lastName: string
      phone?: string
      photo?: string
    }): Promise<DBEmployee> => {
      const { createEmployee } = await request(
        gql`
          mutation($firstName: String, $lastName: String, $phone: String, $photo: String) {
            insert_employees_one(
              object: { firstName: $firstName, lastName: $lastName, phone: $phone, photo: $photo }
            ) {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
        dto,
      )
      return createEmployee
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['employees']),
    },
  )
}

export function useUpdateEmployee() {
  return useMutation(
    async (dto: {
      id: string
      firstName?: string
      lastName?: string
      phone?: string
      photo?: string
    }): Promise<DBEmployee> => {
      const { updateEmployee } = await request(
        gql`
          mutation(
            $id: Int!
            $firstName: String
            $lastName: String
            $phone: String
            $photo: String
          ) {
            update_employees_by_pk(
              pk_columns: { id: $id }
              _set: { firstName: $firstName, lastName: $lastName, phone: $phone, photo: $photo }
            ) {
              id
              firstName
              lastName
              phone
              photo
            }
          }
        `,
        dto,
      )
      return updateEmployee
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['employees']),
    },
  )
}

export function useFetchServices() {
  return useQuery('services', async () => {
    const { services } = await request(
      gql`
        query {
          services {
            id
            name
          }
        }
      `,
    )
    return services
  })
}

export function useCreateService() {
  return useMutation(
    async ({ name }: { name: string }): Promise<DBService> => {
      const { createService } = await request(
        gql`
          mutation($name: String) {
            insert_services_one(object: { name: $name }) {
              id
              name
            }
          }
        `,
        { name },
      )
      return createService
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['services']),
    },
  )
}

export function useUpdateService() {
  return useMutation(
    async (dto: { id: string; name?: string }): Promise<DBService> => {
      const { updateService } = await request(
        gql`
          mutation($id: Int!, $name: String) {
            update_services_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
              id
              name
            }
          }
        `,
        dto,
      )
      return updateService
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['services']),
    },
  )
}
