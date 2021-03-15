import React, { FC, useState } from 'react'
import { Button } from 'ui/Button'
import { RouteComponentProps } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { UploadInput } from 'ui/UploadInput copy'

export const SettingsPage: FC<RouteComponentProps> = (props) => {
  const { formState, control, handleSubmit, setError, errors } = useForm()
  let testurl = ''
  const handleAuthButtonPress = handleSubmit(async (formData) => {
    testurl = formData.photo
    console.log(formData)
  })

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <h1 className="text-primary-500 text-5xl">
        test uploaded file
      </h1>
      <Controller
        name="photo"
        as={UploadInput}
        control={control}
        label="test label to upload files"
        type="file"
        containerClassName="mb-4"
        defaultValue=""
      />
      <Button
        className="w-full mt-6"
        disabled={formState.isSubmitting}
        spinner={formState.isSubmitting}
        onClick={handleAuthButtonPress}
      >
        test button
      </Button>
      <img src={testurl} alt="nophoto" />
    </div>
  )
}
