import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ClientsList from "./Components/ClientsList/ClientsList";
import FormAddClients from "./Components/FormAddClients/FormAddClients";
import { getClients } from "./serverAPI/serverAPI";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Wrapper = () => {
  const { isLoading, data, status } = useQuery("clients", getClients, { refetchOnWindowFocus: false })

  const sortData = data?.sort((a, b) => a.id > b.id ? 1 : -1)

  if (status === "error") {
    return (
      <div className="p-4">
        <h1>Error querying</h1>
      </div>
    )
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bolt text-center">List of Clients</h1>
      <div className="p-4 text-right">
        <a href="#form" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          GO TO ADD
          </a>
      </div>
      <ClientsList isLoading={isLoading} clients={sortData} />
      <FormAddClients />
    </div>
  )
}


export default App;
