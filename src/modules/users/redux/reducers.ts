import { AnyAction } from "redux"
import User from "modules/users/models/User"
import { ACCOUNT_GET_ME_SUCCESS, ACCOUNT_GET_ME, ACCOUNT_LOGIN } from "./types"
import { ReduxStateType, ReduxData } from "redux/types"

interface UserState {
  isAuthenticated: boolean
  userInfo: User
}

interface InitState extends ReduxData<UserState> {}

const initState: InitState = {
  data: {
    isAuthenticated: false,
    userInfo: {}
  },
  status: ReduxStateType.LOADED
}

export default (state: InitState = initState, action: AnyAction) => {
  switch (action.type) {
    case ACCOUNT_GET_ME:
    case ACCOUNT_LOGIN:
      return { ...state, status: ReduxStateType.LOADING }
    case ACCOUNT_GET_ME_SUCCESS:
      return {
        ...state,
        data: { isAuthenticated: true, userInfo: action.payload },
        status: ReduxStateType.LOADED
      }
    default:
      return state
  }
}
