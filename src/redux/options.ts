import { ReduxLoggerOptions } from "redux-logger"
import { SagaMiddlewareOptions } from "redux-saga"

export const loggerOptions: ReduxLoggerOptions = {
  collapsed: true,
  duration: true,
  timestamp: true
}

export const sagaOptions: SagaMiddlewareOptions = {}
