import { FC } from 'react'
import { IconType } from 'react-icons'

type MenuItem = { Icon: IconType; title: string; onClick: () => void }

export const PopupMenu: FC<{ menu: MenuItem[]; close: () => void }> = ({ menu, close }) => {
  return (
    <>
      <div
        className="fixed"
        style={{ left: '-2000px', right: '-2000px', top: '-2000px', bottom: '-2000px' }}
        onClick={close}
      />

      <div
        className="flex flex-col absolute right-2 mt-2 w-40 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        onClick={close}
      >
        {menu.map(({ Icon, title, onClick }) => (
          <button
            className="flex items-center px-4 py-3 text-sm text-primary-600 hover:bg-primary-50 hover:text-primary-700"
            role="menuitem"
            onClick={onClick}
            key={title}
          >
            <Icon size="1rem" className="mr-1.5" /> {title}
          </button>
        ))}
      </div>
    </>
  )
}
