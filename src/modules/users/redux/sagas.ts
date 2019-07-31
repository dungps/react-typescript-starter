import { call, all, put, takeEvery } from "redux-saga/effects"

import UserUtils from "modules/users/apis/function"
import User from "../models/User"
import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_GET_ME_SUCCESS,
  ACCOUNT_GET_ME_FAIL,
  ACCOUNT_LOGIN_FAIL,
  ACCOUNT_GET_ME
} from "./types"
import Request from "helpers/request"
import * as UserActions from "./actions"

export function* login(data: ReturnType<typeof UserActions.login>) {
  try {
    const response = yield call(UserUtils.login, data.payload)
    Request.setAccessToken(response)

    yield put({
      type: ACCOUNT_LOGIN_SUCCESS
    })
  } catch (e) {
    yield put({
      type: ACCOUNT_LOGIN_FAIL
    })
  }
}

export function* getMe() {
  try {
    const user: User = yield UserUtils.getInfo()

    yield put({
      type: ACCOUNT_GET_ME_SUCCESS,
      payload: user
    })
  } catch (e) {
    yield put({
      type: ACCOUNT_GET_ME_FAIL
    })
  }
}

function* watchLogin() {
  yield takeEvery(ACCOUNT_LOGIN, login)
}

function* watchGetMe() {
  yield takeEvery(ACCOUNT_LOGIN_SUCCESS, getMe)
  yield takeEvery(ACCOUNT_GET_ME, getMe)
}

export default function* userSaga() {
  yield all([watchGetMe(), watchLogin()])
}
