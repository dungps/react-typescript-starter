interface User {
  [key: string]: any
  id?: string
  displayName?: string
  email?: string
  accessToken?: string
  refreshToken?: string
}

export default User
