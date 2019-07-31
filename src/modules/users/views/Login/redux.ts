import { AppState } from "redux/reducers"
import { userSelector, selector } from "modules/users/redux/selector"
import { Dispatch, bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ReduxScreenProps } from "utils/types"
import * as UserActions from "modules/users/redux/actions"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state),
  status: selector(state).status
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch)
})

export const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)

export type UserReduxProps = ReduxScreenProps<typeof withRedux>
