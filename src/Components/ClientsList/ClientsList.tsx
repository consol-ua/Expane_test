import React from "react";
import { Client } from "../../serverAPI/serverAPI";
import ClientItem from "./Client/Client";

type PropsType = {
  isLoading: boolean
  clients: Array<Client> | undefined
}


const ClientsList: React.FC<PropsType> = ({ clients, isLoading }) => {

  console.log(clients, isLoading)
  return (
    <div className="p-4">
      <div className="">
        <div className="">Avatar</div>
        <div className="">FirstName</div>
        <div className="">LastName</div>
        <div className="">Phone</div>
      </div>
      <div className="">
        {isLoading ? <span>Loading...</span> : clients?.map((el) => <ClientItem client={el} />)}
      </div>
    </div>
  );
}

export default ClientsList;
