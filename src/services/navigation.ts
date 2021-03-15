import { action, makeObservable, observable } from 'mobx'
import { History } from 'history'
import { FC, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

let history: History
export const BrowserHistoryListener: FC<RouteComponentProps> = props => {
  history = props.history

  useEffect(() => {
    navigation.setRoute(history.location.pathname)

    // Sync browser history pathname with navigation.currentRoute
    return history.listen(location => navigation.setRoute(location.pathname))
  }, [])

  return null
}

class Navigation {
  currentRoute = ''
  setRoute = (route: string) => (this.currentRoute = route)

  push = (route: string, state?: any) => history.push(route, state)
  replace = (route: string, state?: any) => history.replace(route, state)

  constructor() {
    makeObservable(this, {
      currentRoute: observable,
      setRoute: action,
    })
  }
}

export const navigation = new Navigation()
