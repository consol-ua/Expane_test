import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ClientsList from "./Components/ClientsList/ClientsList";
import FormAddClients from "./Components/FormAddClients/FormAddClients";
import { getClients } from "./serverAPI/serverAPI";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}


const Wrapper = () => {
  // Access the client
  // const queryClient = useQueryClient()

  const { isLoading, data, status } = useQuery("clients", getClients)

  // // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries('todos')
  //   },
  // })
  if (status === "error") {
    return (
      <div className="p-4">
        <h1>Error querying</h1>
      </div>
    )
  }
  return (
    <div className="p-4">
      <h1>List of Clients</h1>
      <ClientsList isLoading={isLoading} clients={data} />
      <FormAddClients />
    </div>
  )
}


export default App;
