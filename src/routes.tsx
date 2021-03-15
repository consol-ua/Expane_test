import { createElement, FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'
import { TopBar } from 'components/TopBar'
import { SchedulePage } from 'pages/SchedulePage'
import { EmployeesPage } from 'pages/EmployeesPage'
import { ClientsPage } from 'pages/ClientsPage'
import { SettingsPage } from 'pages/SettingsPage'
import { LocationsPage } from 'pages/LocationsPage'
import { HomePage } from 'pages/HomePage'
import { ServicesPage } from 'pages/ServicesPage'
import { store } from 'store'
import { AuthPage } from 'pages/AuthPage'
import { observer } from 'mobx-react-lite'
import { Spinner } from 'ui/Spinner'
import { BrowserHistoryListener } from 'services/navigation'

export const Routes = () => (
  <Router>
    <TopBar />

    <div className="w-full mx-auto flex flex-1 items-stretch flex-col px-8 bg-gray-50">
      <Switch>
        {topMenuRoutes.map(route => (
          <PrivateRoute path={route.path} component={route.component} key={route.name} />
        ))}

        <PrivateRoute path="/settings" component={SettingsPage} />

        <Route path="/auth" component={AuthPage} />

        <Redirect from="/" to="/home" exact />
      </Switch>

      <Route component={BrowserHistoryListener} />
    </div>
  </Router>
)

export const topMenuRoutes = [
  { name: 'Главная', path: '/home', component: HomePage },
  { name: 'Расписание', path: '/schedule', component: SchedulePage },
  { name: 'Клиенты', path: '/clients', component: ClientsPage },
  { name: 'Сотрудники', path: '/employees', component: EmployeesPage },
  { name: 'Услуги', path: '/services', component: ServicesPage },
  { name: 'Локации', path: '/locations', component: LocationsPage },
]

// Helper to define routes for authenticated users only with automatic redirection
const PrivateRoute = ({ component, ...rest }) => {
  const RouteComponent: FC<RouteComponentProps> = observer(props =>
    store.me.id ? (
      createElement(component, props)
    ) : store.isAuthenticationInitialised ? (
      <Redirect to={{ pathname: '/auth', state: { from: props.location.pathname } }} />
    ) : (
      <Spinner expandCentered />
    ),
  )

  return <Route {...rest} component={RouteComponent} />
}
