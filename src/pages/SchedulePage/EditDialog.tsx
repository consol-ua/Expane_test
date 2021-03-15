import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Modals } from 'ui/Modals'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { Modal } from 'ui/Modal'
import { Dialog } from 'ui/Dialog'
import { store } from 'store'

interface Props {
  initialData: { id: number; startHour: number; endHour: number }
  open: boolean
  closeDialog: () => void
}
export const SchedulePageEditDialog: FC<Props> = ({ initialData, open, closeDialog }) => {
  const isCreate = initialData.id === 0

  // const { mutateAsync: createMutation } = useCreateService()
  // const { mutateAsync: updateMutation } = useUpdateService()

  const { formState, control, handleSubmit } = useForm()

  const mutateEvent = async ({
    id,
    startHour,
    endHour,
  }: {
    id: number
    startHour: number
    endHour: number
  }) => {
    if (isCreate) {
      await store.events.add({
        id: Math.round(Math.random() * 100000),
        startHour,
        endHour,
        clientId: 1,
        serviceId: 1,
      })
    } else {
      await store.events.update({ id: id!, startHour, endHour })
    }

    closeDialog()
  }

  if (!open) return null

  const editedEvent = isCreate
    ? undefined
    : store.events.allArray.find(e => e.id === initialData.id)

  return (
    <Modals>
      <Modal close={closeDialog}>
        <Dialog>
          <Dialog.Title>{isCreate ? 'Добавить событие' : 'Редактировать событие'}</Dialog.Title>

          <Dialog.Body>
            <Controller
              as={Input}
              name="startHour"
              label="Начало"
              placeholder="Начало(часов)"
              control={control}
              defaultValue={isCreate ? initialData.startHour : editedEvent!.startHour}
            />

            <Controller
              as={Input}
              name="endHour"
              label="Окончание"
              placeholder="Окончание(часов)"
              containerClassName="mt-3"
              control={control}
              defaultValue={isCreate ? initialData.endHour : editedEvent!.endHour}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              className="ml-3"
              onClick={handleSubmit(data =>
                mutateEvent({
                  id: initialData.id,
                  startHour: data.startHour,
                  endHour: data.endHour,
                }),
              )}
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
