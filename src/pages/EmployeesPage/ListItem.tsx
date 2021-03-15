import { FC, memo } from 'react'
import { DBEmployee } from '../../interfaces'
import { config } from 'config'

interface Props {
  item: DBEmployee
  onClick: (itemId: string) => void
}
export const EmployeesPageListItem: FC<Props> = memo(({ item, onClick }) => {
  const { firstName, lastName, photo, phone } = item

  return (
    <tr className="hover:bg-primary-50 cursor-pointer" onClick={() => onClick(item.id)}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={photo ?? config.PHOTO_PLACEHOLDER_URL}
              alt="Фото"
            />
          </div>
          <div className="ml-4 text-sm font-medium text-gray-900">
            {firstName} {lastName}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{phone}</div>
      </td>
    </tr>
  )
})
