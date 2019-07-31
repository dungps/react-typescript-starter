import { all } from "redux-saga/effects"

import userSaga from "modules/users/redux/sagas"

export default function* rootSaga() {
  yield all([userSaga()])
}
