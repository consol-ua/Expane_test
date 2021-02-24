import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ClientsList from "./Components/ClientsList/ClientsList";
import FormAddClients from "./Components/FormAddClients/FormAddClients";
import { Client, getClients } from "./serverAPI/serverAPI";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// const testQuery: Array<Client> = [{
//   id: 3,
//   firstName: "Bob",
//   lastName: "Dylan",
//   phone: "+1 410 5552311"
// },
// {
//   id: 4,
//   firstName: "Isaac",
//   lastName: "Asimov",
//   phone: "+36 016 2751209"
// },
// {
//   id: 5,
//   firstName: "Johny",
//   lastName: "Silverhand",
//   phone: "+380971111111"
// }]
// const testQueryRequest = () => {
//   console.log("zapros")
//   return testQuery.filter(() => true)
// }
// function setTimeoutPromise(fn: () => Array<Client>, delay: number): Promise<Array<Client>> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fn())
//     }, delay)
//   })
// }
// const request = setTimeoutPromise(testQueryRequest, 1000)


const Wrapper = () => {
  // Access the client
  // const queryClient = useQueryClient()

  const { isLoading, data, status } = useQuery("clients", getClients)
  // const { isLoading, data, status } = useQuery("clients", () => request)


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
      <h1 className="text-2xl font-bolt text-center">List of Clients</h1>
      <div className="p-4 text-right">
        <a href="#form" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          GO TO ADD
          </a>
      </div>
      <ClientsList isLoading={isLoading} clients={data} />
      <FormAddClients />
    </div>
  )
}


export default App;
