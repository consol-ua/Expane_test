import { FC } from 'react'
import { useFetchClients, useFetchEmployees } from 'logic/gql'
import { Spinner } from 'ui/Spinner'

export const HomePage = () => {
  const { data: clients, isLoading: isClientsLoading } = useFetchClients()
  const { data: employees, isLoading: isEmployeesLoading } = useFetchEmployees()

  return (
    <div className="flex flex-1 justify-center mt-4">
      <HomePageCard amount={clients?.length ?? 0} title="клиентов" loading={isClientsLoading} />
      <HomePageCard
        amount={employees?.length ?? 0}
        title="сотрудников"
        loading={isEmployeesLoading}
      />
    </div>
  )
}

const HomePageCard: FC<{ amount: number; title: string; loading?: boolean }> = ({
  amount,
  title,
  loading,
}) => {
  return (
    <div className="w-48 h-36 m-4 bg-white border rounded-lg shadow-md flex flex-col items-center justify-center">
      {loading ? (
        <Spinner expandCentered />
      ) : (
        <>
          <span className="font-light text-7xl text-primary-600">{amount}</span>
          <span className="text-sm text-gray-300 uppercase">{title}</span>
        </>
      )}
    </div>
  )
}
