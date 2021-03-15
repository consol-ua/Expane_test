import { FC } from 'react'

const CALENDAR_START_HOUR = 7

const ROWS = new Array<{ startHour: number; title: string }>(24)
for (let i = CALENDAR_START_HOUR; i < 24; i++) {
  ROWS.push({ startHour: i, title: i + ':00' })
}

export interface CalendarEvent {
  id: number

  serviceId: number
  clientId: number
  employeeId?: number

  startHour: number
  endHour: number
}

interface Props {
  columns: { name: string; events: CalendarEvent[] }[]
  openEditEventDialog: (id: number) => void
  openCreateEventDialog: (dto: { startHour: number; endHour: number }) => void
}
export const Calendar: FC<Props> = ({ columns, openCreateEventDialog, openEditEventDialog }) => {
  return (
    <div className="flex bg-white shadow">
      <CalendarTimeRow>
        <CalendarCell title="" />

        {ROWS.map(row => (
          <CalendarCell key={row.title} title={row.title} />
        ))}
      </CalendarTimeRow>

      {columns.map(column => (
        <CalendarRow key={column.name}>
          <CalendarCell title={column.name} />

          {ROWS.map(row => (
            <CalendarCell
              key={row.startHour}
              startHour={row.startHour}
              onClick={openCreateEventDialog}
            />
          ))}

          <CalendarRowEvents events={column.events} openEditEventDialog={openEditEventDialog} />
        </CalendarRow>
      ))}
    </div>
  )
}

const CalendarTimeRow: FC = ({ children }) => {
  return (
    <div className="w-20 flex flex-initial flex-col border border-b-0 border-primary-100">
      {children}
    </div>
  )
}

const CalendarRow: FC = ({ children }) => {
  return (
    <div className="w-72 flex flex-initial flex-col border-r border-t border-primary-100 relative">
      {children}
    </div>
  )
}

const CalendarRowEvents: FC<{
  events: CalendarEvent[]
  openEditEventDialog: (id: number) => void
}> = ({ events, openEditEventDialog }) => {
  return (
    <>
      {events.map(event => (
        <div
          className="absolute bg-primary-500 rounded-lg px-1.5 py-0.5 cursor-pointer"
          style={{
            top: (1 + event.startHour - CALENDAR_START_HOUR) * 2.5 + 'rem',
            left: 0,
            right: '0.5rem',
            height: '2.5rem',
          }}
          onClick={() => openEditEventDialog(event.id)}
          key={event.startHour}
        >
          <p className="text-xs text-white">
            {event.startHour}:00 - {event.endHour}:00
          </p>
        </div>
      ))}
    </>
  )
}

type CalendarCellProps = { title?: string; startHour?: number; onClick?: Function }
const CalendarCell: FC<CalendarCellProps> = ({ title, startHour, onClick }) => {
  let styles = 'w-full h-10 border-b border-primary-100 text-xs flex flex-col'

  if (title !== undefined) styles += ' items-center justify-center'

  return (
    <div className={styles}>
      {title !== undefined ? (
        title
      ) : (
        <>
          <div
            className="flex-1 border-b border-dotted border-primary-100 hover:bg-primary-50 cursor-pointer"
            onClick={onClick ? () => onClick({ startHour, endHour: startHour! + 1 }) : undefined}
          />
          <div
            className="flex-1 hover:bg-primary-50 cursor-pointer"
            onClick={
              onClick
                ? () => onClick({ startHour: startHour! + 0.5, endHour: startHour! + 1.5 })
                : undefined
            }
          />
        </>
      )}
    </div>
  )
}
