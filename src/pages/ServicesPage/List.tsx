import React, { FC, memo } from 'react'
import { ServicesPageListItem } from './ListItem'
import { Table } from 'ui/Table'
import { useFetchServices } from 'logic/gql'

export const ServicesPageList: FC<{ onRowClick: (id: string) => void }> = memo(({ onRowClick }) => {
  const { data, isLoading } = useFetchServices()

  return (
    <Table
      titles={titles}
      items={data}
      ListItem={ServicesPageListItem}
      onRowClick={onRowClick}
      loading={isLoading}
    />
  )
})

const titles = ['Название']
