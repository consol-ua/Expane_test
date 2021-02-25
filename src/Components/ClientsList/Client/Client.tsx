import React, { useState } from "react";
import { Client } from "../../../serverAPI/serverAPI";
import ClientForm from "./ClientForm";

type PropsType = {
  client: Client;
  index: number;
};

const defaultAva =
  "https://iconape.com/wp-content/png_logo_vector/avatar-4.png";

const ClientItem: React.FC<PropsType> = ({ client, index }) => {
  const [editMode, setEditMode] = useState(false);

  const editClient = () => {
    setEditMode(false)
  }

  return (
    <>
      { editMode ? <ClientForm client={client} index={index} editClient={editClient} /> : (<div
        className={
          (index % 2 ? "bg-blue-50 " : "bg-blue-100 ") +
          "flex justify-between bg-gray-300 divide-x divide-black hover:bg-blue-200 h-20"
        }

        onDoubleClick={() => {
          setEditMode(true);
        }}
      >
        <div className="p-4 flex-initial w-2/12 p-1 flex justify-center items-center">
          <img
            className="max-h-20 my-0 mx-auto"
            src={client.avatarUrl ? client.avatarUrl : defaultAva}
            alt="avatar"
          />
        </div>
        <div className="p-4 flex-initial w-3/12 p-1 flex justify-center items-center">
          {client.firstName}
        </div>
        <div className="p-4 flex-initial w-3/12 p-1 flex justify-center items-center">
          {client.lastName}
        </div>
        <div className="p-4 flex-initial w-4/12 p-1 flex justify-center items-center">
          {client.phone}
        </div>
      </div>)
      }
    </>
  );
};

export default ClientItem;
