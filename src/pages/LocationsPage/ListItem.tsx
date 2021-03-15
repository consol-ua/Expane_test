import { FC, memo } from 'react'
import { DBLocation } from '../../interfaces'

interface Props {
  item: DBLocation
  onClick: (itemId: string) => void
}
export const LocationsPageListItem: FC<Props> = memo(({ item, onClick }) => {
  const { name } = item

  return (
    <tr className="hover:bg-primary-50 cursor-pointer" onClick={() => onClick(item.id)}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
    </tr>
  )
})
