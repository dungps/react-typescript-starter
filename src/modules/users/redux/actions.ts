import { ACCOUNT_LOGIN, ACCOUNT_GET_ME } from "./types"
import Login from "../models/Login"

export const login = (data: Login) => ({
  type: ACCOUNT_LOGIN,
  payload: data
})

export const getMe = () => ({
  type: ACCOUNT_GET_ME
})
