export interface CreateMinistry {
  name: string
}

export interface CreateMinistryResponse {
  id: string
  name: string
  userId: number
}

export type Ministry = {
  id: string
  name: string
  userId: number
  createdBy: {
    firstName: string
    lastName: string
  }
  _count: {
    members: number
  }
}
