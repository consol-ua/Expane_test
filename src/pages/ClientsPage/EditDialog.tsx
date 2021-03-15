import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useCreateClient, useFetchClients, useUpdateClient } from 'logic/gql'
import { Modals } from 'ui/Modals'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { Modal } from 'ui/Modal'
import { Dialog } from 'ui/Dialog'

interface Props {
  clientId?: string
  open: boolean
  closeDialog: () => void
}
export const ClientsPageEditDialog: FC<Props> = ({ clientId, open, closeDialog }) => {
  const isCreate = clientId === ''

  const { mutateAsync: createMutation } = useCreateClient()
  const { mutateAsync: updateMutation } = useUpdateClient()

  const { formState, control, handleSubmit } = useForm()

  const mutateClient = async ({
    id,
    firstName,
    lastName,
    phone,
    photo,
  }: {
    id?: string
    firstName: string
    lastName: string
    phone?: string
    photo?: string
  }) => {
    if (isCreate) {
      await createMutation({ firstName, lastName, phone, photo })
    } else {
      await updateMutation({ id: id!, firstName, lastName, phone, photo })
    }

    closeDialog()
  }

  const { data: clients } = useFetchClients()

  const client = isCreate ? undefined : clients?.find(l => l.id === clientId)

  if (!open) return null

  return (
    <Modals>
      <Modal close={closeDialog}>
        <Dialog>
          <Dialog.Title>{isCreate ? 'Добавить клиента' : 'Редактировать клиента'}</Dialog.Title>

          <Dialog.Body>
            <Controller
              as={Input}
              name="firstName"
              label="Имя"
              placeholder="Введите имя..."
              control={control}
              defaultValue={client?.firstName ?? ''}
            />

            <Controller
              as={Input}
              name="lastName"
              label="Фамилия"
              placeholder="Введите фамилию..."
              control={control}
              containerClassName="mt-3"
              defaultValue={client?.lastName ?? ''}
            />

            <Controller
              as={Input}
              name="phone"
              label="Телефон"
              placeholder="Введите телефон..."
              control={control}
              containerClassName="mt-3"
              defaultValue={client?.phone ?? ''}
            />

            <Controller
              as={Input}
              name="photo"
              label="Фото"
              placeholder="Введите url фото..."
              control={control}
              containerClassName="mt-3"
              defaultValue={client?.photo ?? ''}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              className="ml-4"
              onClick={handleSubmit(data =>
                mutateClient({
                  id: clientId,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  phone: data.phone,
                  photo: data.photo,
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
