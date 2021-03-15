import { FC, memo } from 'react'
import { DBService } from '../../interfaces'

interface Props {
  item: DBService
  onClick: (itemId: string) => void
}
export const ServicesPageListItem: FC<Props> = memo(({ item, onClick }) => {
  const { name } = item

  return (
    <tr className="hover:bg-primary-50 cursor-pointer" onClick={() => onClick(item.id)}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
    </tr>
  )
})
