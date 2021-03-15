import { useCallback, useState } from 'react'
import { EmployeesPageList } from './List'
import { IoAddCircle } from 'react-icons/io5'
import { Button } from 'ui/Button'
import { usePopupOpenState } from 'logic/ui'
import { EmployeesPageEditDialog } from './EditDialog'

export const EmployeesPage = () => {
  const [dialogEmployeeId, setDialogEmployeeId] = useState<string>('')
  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  const editEmployee = useCallback(
    (id: string) => {
      setDialogEmployeeId(id)
      openPopup()
    },
    [openPopup],
  )

  const addEmployee = () => {
    setDialogEmployeeId('')
    openPopup()
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="my-6">
        <Button onClick={addEmployee}>
          <IoAddCircle size="1.5rem" className="mr-1.5" /> Создать
        </Button>
      </div>

      <EmployeesPageList onRowClick={editEmployee} />

      <EmployeesPageEditDialog
        open={isOpen}
        closeDialog={closePopup}
        employeeId={dialogEmployeeId}
      />
    </div>
  )
}
