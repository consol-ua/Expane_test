import React, { FC } from 'react'
import { Spinner } from './Spinner'

interface Props {
  titles: string[]
  items: any[] | undefined
  ListItem: FC<{ item; onClick }>
  onRowClick?: (id: string) => void
  loading?: boolean // Data is currently fetching, display spinner
}
export const Table: FC<Props> = ({ items, ListItem, titles, loading, onRowClick }) => {
  return (
    <div className="flex flex-col">
      <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-primary-100">
          <thead className="bg-primary-50">
            <tr>
              {titles.map(title => (
                <th
                  key={title}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-primary-50">
            {loading ? (
              <tr>
                <td colSpan={titles.length}>
                  <div className="flex-col flex-1 items-center w-full text-center">
                    <Spinner className="m-16" />
                  </div>
                </td>
              </tr>
            ) : items == null ? null : (
              items.map(item => <ListItem item={item} onClick={onRowClick} key={item.id} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
