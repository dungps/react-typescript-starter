import { combineReducers } from "redux"

import languagesReducer from "modules/languages/redux/reducers"
import userReducer from "modules/users/redux/reducers"
import { AppReducerType } from "./types"

const reducers = combineReducers({
  [AppReducerType.LANGUAGE]: languagesReducer,
  [AppReducerType.USER]: userReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
