import { FC, useCallback, useState } from 'react'
import { ClientsPageList } from './List'
import { IoAddCircle } from 'react-icons/io5'
import { Button } from 'ui/Button'
import { usePopupOpenState } from 'logic/ui'
import { ClientsPageEditDialog } from './EditDialog'

export const ClientsPage: FC = () => {
  const [dialogClientId, setDialogClientId] = useState<string>('')
  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  const editClient = useCallback(
    (id: string) => {
      setDialogClientId(id)
      openPopup()
    },
    [openPopup],
  )

  const addClient = () => {
    setDialogClientId('')
    openPopup()
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="my-6">
        <Button onClick={addClient}>
          <IoAddCircle size="1.5rem" className="mr-1.5" /> Создать
        </Button>
      </div>

      <ClientsPageList onRowClick={editClient} />

      <ClientsPageEditDialog open={isOpen} closeDialog={closePopup} clientId={dialogClientId} />
    </div>
  )
}
