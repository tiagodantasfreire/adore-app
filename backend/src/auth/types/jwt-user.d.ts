export type JwtUser = {
  id: number
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
  refreshToken: string
  iat: number
  exp: number
}
