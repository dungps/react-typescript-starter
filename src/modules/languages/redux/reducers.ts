import * as actionTypes from "./types"
import storage from "helpers/storage"
import localeData from "locales"
import { AnyAction } from "redux"

export interface LanguageState {
  locale: string
  data: any
}

const initState: LanguageState = {
  locale: storage.get("locale", "en"),
  data: localeData
}

export default (state: LanguageState = initState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.LANGUAGE_SET_LOCALE:
      return { ...state, locale: action.payload }
    default:
      return state
  }
}
