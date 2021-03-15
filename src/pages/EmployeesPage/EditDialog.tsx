import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useCreateEmployee, useFetchEmployees, useUpdateEmployee } from 'logic/gql'
import { Modals } from 'ui/Modals'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { Modal } from 'ui/Modal'
import { Dialog } from 'ui/Dialog'

interface Props {
  employeeId?: string
  open: boolean
  closeDialog: () => void
}
export const EmployeesPageEditDialog: FC<Props> = ({ employeeId, open, closeDialog }) => {
  const isCreate = employeeId === ''

  const { mutateAsync: createMutation } = useCreateEmployee()
  const { mutateAsync: updateMutation } = useUpdateEmployee()

  const { formState, control, handleSubmit } = useForm()

  const mutateEmployee = async ({
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

  const { data: employees } = useFetchEmployees()

  const employee = isCreate ? undefined : employees?.find(l => l.id === employeeId)

  if (!open) return null

  return (
    <Modals>
      <Modal close={closeDialog}>
        <Dialog>
          <Dialog.Title>
            {isCreate ? 'Добавить сотрудника' : 'Редактировать сотрудника'}
          </Dialog.Title>

          <Dialog.Body>
            <Controller
              as={Input}
              name="firstName"
              label="Имя"
              placeholder="Введите имя..."
              control={control}
              defaultValue={employee?.firstName ?? ''}
            />

            <Controller
              as={Input}
              name="lastName"
              label="Фамилия"
              placeholder="Введите фамилию..."
              control={control}
              containerClassName="mt-3"
              defaultValue={employee?.lastName ?? ''}
            />

            <Controller
              as={Input}
              name="phone"
              label="Телефон"
              placeholder="Введите телефон..."
              control={control}
              containerClassName="mt-3"
              defaultValue={employee?.phone ?? ''}
            />

            <Controller
              as={Input}
              name="photo"
              label="Фото"
              placeholder="Введите url фото..."
              control={control}
              containerClassName="mt-3"
              defaultValue={employee?.photo ?? ''}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              className="ml-4"
              onClick={handleSubmit(data =>
                mutateEmployee({
                  id: employeeId,
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
