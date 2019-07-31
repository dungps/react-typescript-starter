import Login from "../models/Login"
import User from "../models/User"
import sample from "./sample"

/**
 * A simple [Promise] timeout to give some delay
 *
 * @param ms The time to delay (in millisecond)
 */
export const wait = (ms: number = 1000) => new Promise((res) => setTimeout(res, ms))

class UserApis {
  static async login(data: Login): Promise<User> {
    // Give a little delay to look like the real api request
    await wait()

    return sample
  }

  static async getInfo(): Promise<User> {
    await wait()

    return sample
  }

  static async refreshToken(): Promise<User> {
    await wait()

    return sample
  }
}

export default UserApis
