import { Routes } from 'routes'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'services/api'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
