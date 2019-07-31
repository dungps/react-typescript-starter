import { createStore, applyMiddleware, compose, Store } from "redux"
import middlewares from "./middlewares"
import reducers from "./reducers"
import request from "helpers/request"
import { setupMiddleware } from "./middlewares"

export default () => {
  const store: Store = createStore(reducers, compose(applyMiddleware(...middlewares)))

  request.setupInterceptors(store)

  setupMiddleware()

  return store
}
