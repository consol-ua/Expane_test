import React, { FC, useCallback, useState } from 'react'
import { Button } from 'ui/Button'
import { ServicesPageEditDialog } from './EditDialog'
import { ServicesPageList } from './List'
import { IoAddCircle } from 'react-icons/io5'
import { usePopupOpenState } from 'logic/ui'

export const ServicesPage: FC = () => {
  const [dialogServiceId, setDialogServiceId] = useState('')
  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  const editService = useCallback(
    (id: string) => {
      setDialogServiceId(id)
      openPopup()
    },
    [openPopup],
  )

  const createService = () => {
    setDialogServiceId('')
    openPopup()
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="my-6">
        <Button onClick={createService}>
          <IoAddCircle size="1.5rem" className="mr-1.5" /> Создать
        </Button>
      </div>

      <ServicesPageList onRowClick={editService} />

      <ServicesPageEditDialog open={isOpen} closeDialog={closePopup} serviceId={dialogServiceId} />
    </div>
  )
}
