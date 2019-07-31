import * as actionTypes from "./types"
import { AnyAction } from "redux"
import { ReduxStateType } from "redux/types"

export interface InitState {
  status: ReduxStateType
}

const initState: InitState = {
  status: ReduxStateType.LOADING
}

export default (state: InitState = initState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.INIT_SUCCESS:
      return { ...state, status: ReduxStateType.LOADED }
    default:
      return state
  }
}
