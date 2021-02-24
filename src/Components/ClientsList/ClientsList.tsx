import React from "react";
import { Client } from "../../serverAPI/serverAPI";
import ClientItem from "./Client/Client";

type PropsType = {
  isLoading: boolean
  clients: Array<Client> | undefined
}


const ClientsList: React.FC<PropsType> = ({ clients, isLoading }) => {

  return (
    <div className="border border-black min-w-max">
      <div className="flex justify-between bg-gray-300 divide-x divide-black border-b-2 border-black ">
        <div className="p-4 flex-initial w-2/12 p-1 text-center">Avatar</div>
        <div className="p-4 flex-initial w-3/12 p-1 text-center">FirstName</div>
        <div className="p-4 flex-initial w-3/12 p-1 text-center">LastName</div>
        <div className="p-4 flex-initial w-4/12 p-1 text-center">Phone</div>
      </div>
      <div>
        {isLoading ?
          <span className="block text-xl font-bolt text-center p-4">Loading...</span>
          : clients?.map((el, index) => <ClientItem client={el} index={index} key={el.id} />)}
      </div>
    </div>
  );
}

export default ClientsList;
