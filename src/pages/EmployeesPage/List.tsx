import { FC, memo } from 'react'
import { EmployeesPageListItem } from './ListItem'
import { useFetchEmployees } from 'logic/gql'
import { Table } from 'ui/Table'

export const EmployeesPageList: FC<{ onRowClick: (id: string) => void }> = memo(
  ({ onRowClick }) => {
    const { data, isLoading } = useFetchEmployees()

    return (
      <Table
        titles={titles}
        items={data}
        ListItem={EmployeesPageListItem}
        onRowClick={onRowClick}
        loading={isLoading}
      />
    )
  },
)

const titles = ['Имя', 'Телефон']
