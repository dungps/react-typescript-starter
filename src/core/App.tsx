import React, { Component, Fragment } from "react"
import Helmet from "react-helmet"
import AppRoute from "routers"
import "assets/sass/app.scss"
import { History } from "history"
import Spinner from "components/spinner"

interface Props {
  history: History
}

class App extends Component<Props> {
  render() {
    const { history } = this.props
    console.log(this.props)
    return (
      <Fragment>
        <Helmet htmlAttributes={{ lang: "en" }} defaultTitle="WorkEvo" titleTemplate={`WorkEvo - %s`} />
        {false ? <Spinner /> : <AppRoute history={history} />}
      </Fragment>
    )
  }
}

export default App
