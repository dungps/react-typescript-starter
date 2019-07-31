export enum AppReducerType {
  LANGUAGE = "language",
  USER = "users"
}

export enum ReduxStateType {
  INIT = "init",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
  CANCELLED = "cancelled"
}

export interface ReduxData<T> {
  data: T
  status: ReduxStateType
  error?: Error
}
