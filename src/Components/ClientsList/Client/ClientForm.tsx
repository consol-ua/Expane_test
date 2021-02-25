import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Client, updateClient } from "../../../serverAPI/serverAPI";
import { formatToRequestForm } from "../../FormAddClients/FormAddClients";

type PropsType = {
  client: Client;
  index: number;
  editClient: () => void
};

const compareObjects = (o1: any, o2: any) => {
  for (let p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  for (let p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  return true;
};

const ClientForm: React.FC<PropsType> = ({ client, index, editClient }) => {
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient()
  const mutation = useMutation(updateClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients")
    },
  })

  const subUpdateClient = (e: any) => {
    const newData = formatToRequestForm(e)
    if (!compareObjects(newData, client)) {
      mutation.mutate(newData)
    }
    editClient()
  }

  return (
    <form
      className={
        (index % 2 ? "bg-blue-50 " : "bg-blue-100 ") +
        "flex justify-between bg-gray-300 divide-x divide-black hover:bg-blue-200"
      }
      onSubmit={handleSubmit(subUpdateClient)}
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
      <input
        ref={register}
        type="text"
        className="hidden"
        name="id"
        defaultValue={client.id}
      />
      <input className="hidden" type="submit" value="sub" />
    </form>
  );
};

export default ClientForm;
