import React, { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useCreateService, useFetchServices, useUpdateService } from 'logic/gql'
import { Modals } from 'ui/Modals'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { Modal } from 'ui/Modal'
import { Dialog } from 'ui/Dialog'

interface Props {
  serviceId?: string
  open: boolean
  closeDialog: () => void
}
export const ServicesPageEditDialog: FC<Props> = ({ serviceId, open, closeDialog }) => {
  const isCreate = serviceId === ''

  const { mutateAsync: createMutation } = useCreateService()
  const { mutateAsync: updateMutation } = useUpdateService()

  const { formState, control, handleSubmit } = useForm()

  const mutateLocation = async ({ id, name }: { id?: string; name: string }) => {
    if (isCreate) {
      await createMutation({ name })
    } else {
      await updateMutation({ id: id!, name })
    }

    closeDialog()
  }

  const { data: services } = useFetchServices()

  if (!open) return null

  return (
    <Modals>
      <Modal close={closeDialog}>
        <Dialog>
          <Dialog.Title>{isCreate ? 'Добавить услугу' : 'Редактировать услугу'}</Dialog.Title>

          <Dialog.Body>
            <Controller
              as={Input}
              name="name"
              label="Название"
              placeholder="Введите название..."
              control={control}
              defaultValue={isCreate ? '' : services.find(l => l.id === serviceId)!.name}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              className="ml-3"
              onClick={handleSubmit(data => mutateLocation({ id: serviceId, name: data.name }))}
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
