import { FC, useCallback, useRef } from 'react'
import { Calendar } from 'components/Calendar'
import { useFetchClients, useFetchLocations, useFetchServices } from 'logic/gql'
import { Spinner } from 'ui/Spinner'
import { usePopupOpenState } from 'logic/ui'
import { SchedulePageEditDialog } from './EditDialog'
import { store } from 'store'
import { observer } from 'mobx-react-lite'

export const SchedulePage: FC = observer(() => {
  const dialogData = useRef({ id: 0, startHour: 0, endHour: 0 })

  const { isOpen, openPopup, closePopup } = usePopupOpenState()

  const { data: locations } = useFetchLocations()
  const { data: services } = useFetchServices()
  const { data: clients } = useFetchClients()

  const openEditEventDialog = useCallback(
    (id: number) => {
      dialogData.current.id = id
      openPopup()
    },
    [openPopup],
  )

  const openCreateEventDialog = useCallback(
    (dto: { startHour: number; endHour: number }) => {
      dialogData.current.id = 0
      dialogData.current.startHour = dto.startHour
      dialogData.current.endHour = dto.endHour

      openPopup()
    },
    [openPopup],
  )

  if (locations == null || services == null || clients == null) return <Spinner expandCentered />

  return (
    <div className="flex flex-col my-6 items-start">
      <Calendar
        openCreateEventDialog={openCreateEventDialog}
        openEditEventDialog={openEditEventDialog}
        columns={locations.map(location => ({
          name: location.name,
          events: store.events.allArray,
        }))}
      />

      <SchedulePageEditDialog
        open={isOpen}
        closeDialog={closePopup}
        initialData={dialogData.current}
      />
    </div>
  )
})
