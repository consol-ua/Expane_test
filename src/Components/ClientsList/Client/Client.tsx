import React from "react";
import { Client } from "../../../serverAPI/serverAPI";

type PropsType = {
  client: Client
}

const ClientItem: React.FC<PropsType> = (props) => {

  return (
    <div className="p-4">
      <div className="">
        <div className="">Avatar</div>
        <div className="">FirstName</div>
        <div className="">LastName</div>
        <div className="">Phone</div>
      </div>

    </div>
  );
}

export default ClientItem;
