import { ACCESS_TOKEN_KEY, REFRESH_ACCESS_TOKEN_KEY } from "./constants"

const Storage = {
  get: function(key: string, defaultValue: string = "") {
    const value = localStorage.getItem(key)

    return value ? value : defaultValue
  },

  set: function(key: string, value: string = "") {
    localStorage.setItem(key, value)
  },

  remove: function(key: string) {
    localStorage.removeItem(key)
  },

  getAccessToken: function() {
    return Storage.get(ACCESS_TOKEN_KEY)
  },

  setAccessToken: function(token: string) {
    return Storage.set(ACCESS_TOKEN_KEY, token)
  },

  setRefreshToken: function(token: string) {
    return Storage.set(REFRESH_ACCESS_TOKEN_KEY, token)
  },

  getRefreshToken: function() {
    return Storage.get(REFRESH_ACCESS_TOKEN_KEY)
  },

  removeToken: function() {
    Storage.remove(ACCESS_TOKEN_KEY)
    Storage.remove(REFRESH_ACCESS_TOKEN_KEY)
  },

  clearAll: function() {
    localStorage.clear()
  }
}

export default Storage
