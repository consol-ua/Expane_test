import { FC, memo } from 'react'
import { LocationsPageListItem } from './ListItem'
import { Table } from 'ui/Table'
import { useFetchLocations } from 'logic/gql'

export const LocationsPageList: FC<{ onRowClick: (id: string) => void }> = memo(
  ({ onRowClick }) => {
    const { data, isLoading } = useFetchLocations()

    return (
      <Table
        titles={titles}
        items={data}
        ListItem={LocationsPageListItem}
        onRowClick={onRowClick}
        loading={isLoading}
      />
    )
  },
)

const titles = ['Название']
