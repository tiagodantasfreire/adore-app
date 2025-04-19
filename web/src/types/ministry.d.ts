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
  accessCode: string
  createdBy: {
    firstName: string
    lastName: string
  }
}
