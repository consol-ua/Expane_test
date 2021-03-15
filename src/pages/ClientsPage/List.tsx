import { FC, memo } from 'react'
import { ClientsPageListItem } from './ListItem'
import { useFetchClients } from 'logic/gql'
import { Table } from 'ui/Table'

export const ClientsPageList: FC<{ onRowClick: (id: string) => void }> = memo(({ onRowClick }) => {
  const { data, isLoading } = useFetchClients()

  return (
    <Table
      titles={titles}
      items={data}
      ListItem={ClientsPageListItem}
      onRowClick={onRowClick}
      loading={isLoading}
    />
  )
})

const titles = ['Имя', 'Телефон']
