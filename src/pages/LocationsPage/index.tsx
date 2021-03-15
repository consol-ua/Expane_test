import { FC, useCallback, useState } from 'react'
import { Button } from 'ui/Button'
import { LocationsPageEditDialog } from './EditDialog'
import { LocationsPageList } from './List'
import { IoAddCircle } from 'react-icons/io5'
import { usePopupOpenState } from 'logic/ui'

export const LocationsPage: FC = () => {
  const [dialogLocationId, setDialogLocationId] = useState<string>('')
  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  const editLocation = useCallback(
    (id: string) => {
      setDialogLocationId(id)
      openPopup()
    },
    [openPopup],
  )

  const createLocation = () => {
    setDialogLocationId('')
    openPopup()
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="my-6">
        <Button onClick={createLocation}>
          <IoAddCircle size="1.5rem" className="mr-1.5" /> Создать
        </Button>
      </div>

      <LocationsPageList onRowClick={editLocation} />

      <LocationsPageEditDialog
        open={isOpen}
        closeDialog={closePopup}
        locationId={dialogLocationId}
      />
    </div>
  )
}
