import React from "react";
import { useForm } from "react-hook-form";
import { Client } from "../../../serverAPI/serverAPI";

type PropsType = {
  client: Client;
  index: number;
  editClient: (data: Client) => void
};


const ClientForm: React.FC<PropsType> = ({ client, index, editClient }) => {
  const { register, handleSubmit } = useForm();


  return (
    <form
      className={
        (index % 2 ? "bg-blue-50 " : "bg-blue-100 ") +
        "flex justify-between bg-gray-300 divide-x divide-black hover:bg-blue-200"
      }
      onSubmit={handleSubmit((data: Client) => {
        data.id = client.id
        editClient(data)
      })}
    >
      <input
        ref={register}
        type="text"
        className="p-4 flex-initial w-2/12 p-1 flex justify-center items-center"
        name="avatarUrl"
        alt="avatar"
        defaultValue={client.avatarUrl}
      />
      <input
        ref={register}
        type="text"
        className="p-4 flex-initial w-3/12 p-1 flex justify-center items-center"
        autoFocus
        name="firstName"
        defaultValue={client.firstName}
      />
      <input
        ref={register}
        type="text"
        className="p-4 flex-initial w-3/12 p-1 flex justify-center items-center"
        name="lastName"
        defaultValue={client.lastName}
      />
      <input
        ref={register}
        type="text"
        className="p-4 flex-initial w-4/12 p-1 flex justify-center items-center"
        name="phone"
        defaultValue={client.phone}
      />
      <input className="hidden" type="submit" value="sub" />
    </form>
  );
};

export default ClientForm;
