import { ButtonHTMLAttributes, FC } from 'react'
import { topMenuRoutes } from 'routes'
import { observer } from 'mobx-react-lite'
import { store } from 'store'
import { firebase } from 'services/firebase'
import logo from 'assets/img/expane-logo.png'
import { Link } from 'react-router-dom'
import { Avatar } from 'ui/Avatar'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { PopupMenu } from 'ui/PopupMenu'
import { usePopupOpenState } from 'logic/ui'
import { navigation } from 'services/navigation'

export const TopBar: FC = observer(function TopBar() {
  const value = topMenuRoutes.findIndex(route => route.path === navigation.currentRoute)

  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  return (
    <div className="w-full bg-white px-8 border-b border-primary-50">
      <nav className="h-14 flex items-center justify-between">
        <Link to="/home">
          <img src={logo} alt={'expane'} className="w-36" />
        </Link>

        {store.me.id !== null && (
          <div className="flex space-x-4 items-center">
            {topMenuRoutes.map((route, index) => (
              <Item key={route.name} route={route.path} active={value === index}>
                {route.name}
              </Item>
            ))}

            <div className="h-6 border-primary-100 border-l mr-1.5" />

            <div className="relative">
              <Avatar
                name="Фёдор Ушаков"
                onClick={isOpen ? closePopup : openPopup}
                className="cursor-pointer"
              />

              {isOpen && <PopupMenu menu={menu} close={closePopup} />}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
})

const menu = [
  { Icon: IoSettingsOutline, title: 'Настройки', onClick: () => navigation.push('/settings') },
  { Icon: IoLogOutOutline, title: 'Выйти', onClick: () => firebase.signOut() },
]

const basicStyle = 'px-3 py-2 rounded-md text-sm font-medium transition-all'
const tabStyle = 'text-primary-500 hover:bg-primary-500 hover:text-white ' + basicStyle
const selectedTabStyle = 'bg-primary-500 text-white cursor-default ' + basicStyle

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  route: string
  active: boolean
}
const Item: FC<Props> = ({ children, route, active, ...props }) => (
  <Link to={route}>
    <button className={active ? selectedTabStyle : tabStyle} {...props}>
      {children}
    </button>
  </Link>
)
