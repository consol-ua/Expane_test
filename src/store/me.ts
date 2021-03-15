import { makeAutoObservable } from 'mobx'

export class MeStore {
  constructor() {
    makeAutoObservable(this)
  }

  id: string | null = null
  setId = (id: string | null) => {
    this.id = id
  }
}
