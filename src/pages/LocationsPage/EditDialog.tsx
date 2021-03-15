import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useCreateLocation, useFetchLocations, useUpdateLocation } from 'logic/gql'
import { Modals } from 'ui/Modals'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { Modal } from 'ui/Modal'
import { Dialog } from 'ui/Dialog'

interface Props {
  locationId?: string
  open: boolean
  closeDialog: () => void
}
export const LocationsPageEditDialog: FC<Props> = ({ locationId, open, closeDialog }) => {
  const isCreate = locationId === '' // If locationId is empty, it's create dialog

  const { mutateAsync: createMutation } = useCreateLocation()
  const { mutateAsync: updateMutation } = useUpdateLocation()

  const { formState, control, handleSubmit } = useForm()

  const mutateLocation = async ({ id, name }: { id?: string; name: string }) => {
    if (isCreate) {
      await createMutation({ name })
    } else {
      await updateMutation({ id: id!, name })
    }

    closeDialog()
  }

  const { data: locations } = useFetchLocations()

  if (!open) return null

  return (
    <Modals>
      <Modal close={closeDialog}>
        <Dialog>
          <Dialog.Title>{isCreate ? 'Добавить локацию' : 'Редактировать локацию'}</Dialog.Title>

          <Dialog.Body>
            <Controller
              as={Input}
              name="name"
              label="Название"
              placeholder="Введите название..."
              control={control}
              defaultValue={isCreate ? '' : locations.find(l => l.id === locationId)!.name}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              className="ml-3"
              onClick={handleSubmit(data => mutateLocation({ id: locationId, name: data.name }))}
              disabled={formState.isSubmitting}
            >
              Сохранить
            </Button>

            <Button type="outline" onClick={closeDialog} disabled={formState.isSubmitting}>
              Отмена
            </Button>
          </Dialog.Footer>
        </Dialog>
      </Modal>
    </Modals>
  )
}
