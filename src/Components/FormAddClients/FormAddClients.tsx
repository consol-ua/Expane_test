import React from "react";
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query";
import { AddClient, addClient } from "../../serverAPI/serverAPI";

export const formatToRequestForm = (data: any) => {
  const requestForm: any = {}
  for (let i in data) {
    if (!data[i].length) {
      requestForm[i] = null
    } else {
      requestForm[i] = data[i]
    }
  }
  return requestForm
}

const FormAddClient = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const queryClient = useQueryClient()

  const mutation = useMutation(addClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients")
    },
  })

  const submitNewClient = (e: AddClient) => {
    const newData = formatToRequestForm(e)
    mutation.mutate(newData)
    for (let key in e) {
      setValue(key, "")
    }
    // setValue("firstName", "")
    // setValue("lastName", "")
    // setValue("phone", "")
    // setValue("avatarUrl", "")
  }

  return (
    <form className="border mt-10" onSubmit={handleSubmit(submitNewClient)} id="form">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="p-4 bg-white">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input ref={register({
                required: "required field"
              })}
                type="text"
                name="firstName"
                className={"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" + (errors.firstName?.message ? " border-red-500" : "")}
              />
              {errors.firstName?.message ? <span className="text-red-500">{errors.firstName?.message}</span> : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input ref={register({
                required: "required field"
              })}
                type="text"
                name="lastName"
                className={"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" + (errors.lastName?.message ? " border-red-500" : "")}
              />
              {errors.lastName?.message ? <span className="text-red-500">{errors.lastName?.message}</span> : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input ref={register}
                type="tel"
                name="phone"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Avatar Url
              </label>
              <input ref={register}
                type="url"
                name="avatarUrl"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 text-right">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            ADD
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAddClient;
