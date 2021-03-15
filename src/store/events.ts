import { makeAutoObservable } from 'mobx'
import { CalendarEvent } from '../components/Calendar'

// TEMPORARY UNTIL BACKEND IS IMPLEMENTED
export class EventsStore {
  constructor() {
    makeAutoObservable(this)
  }

  allArray: CalendarEvent[] = []

  add = (event: CalendarEvent) => this.allArray.push(event)
  update = (dto: Partial<CalendarEvent>) =>
    Object.assign(
      this.allArray.find(e => e.id === dto.id),
      dto,
    )
}
