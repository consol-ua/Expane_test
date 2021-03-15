export interface DBBusiness {
  id: string
  name: string
  address?: Address
}

export interface DBClient {
  id: string
  firstName: string
  lastName: string
  phone?: string
  email?: string
  photo?: string
  gender?: Gender
  birthday?: number
  document?: IDDocument
  address?: Address
  notes?: string
}

export interface DBEmployee {
  id: string
  firstName: string
  lastName: string
  phone?: string
  email?: string
  photo?: string
  gender?: Gender
  birthday?: number
  document?: IDDocument
  address?: Address
  notes?: string
}

export interface DBLocation {
  id: string
  name: string
}

export interface DBService {
  id: string
  name: string
}

type Gender = 'm' | 'f'

interface IDDocument {
  type: 'passport'
  series: string
  number: string
  issued: string
  taxId?: string
}

interface Address {
  zip?: string
  region?: string
  line1: string
  line2?: string
}
