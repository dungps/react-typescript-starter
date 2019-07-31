import React from "react"
import { Provider } from "react-redux"
import App from "./App"
import ConnectedIntlProvider from "./containers/ConnectedIntlProvider"
import { History } from "history"

interface Props {
  store: any
  history: History
}

const Root = (props: Props) => {
  const { store, history } = props

  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <App history={history} />
      </ConnectedIntlProvider>
    </Provider>
  )
}

export default Root
