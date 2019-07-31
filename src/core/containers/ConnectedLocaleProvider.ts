import { connect } from "react-redux"
import moment from "moment"
import { LanguageState } from "modules/languages/redux/reducers"
import { Fragment } from "react"

interface State {
  languages: LanguageState
}

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
const setLocale = (locale: string) => {
  if (locale && locale !== moment.locale()) {
    // moment.locale(locale);
  }
}

const mapStateToProps = (state: State) => {
  const { locale } = state.languages

  switch (locale) {
    case "en":
    case "en_US":
      setLocale("en")
      return {}
    case "vi":
    case "vi_VN":
      setLocale("vi")
      return {}
    default:
      setLocale("en")
      return {}
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(Fragment)
