import React from "react"
import { Router, Switch } from "react-router-dom"
import Routes from "routers/routes"
import AppRoute from "./AppRoute"
import { History } from "history"

interface Props {
  history: History
}

const AppRouter = (props: Props) => {
  return (
    <Router history={props.history}>
      <Switch>
        {Routes.map((route, i) => {
          console.log(route)
          return <AppRoute key={i} {...route} />
        })}
        {/*<Redirect from="*" to={Route.page404} />*/}
      </Switch>
    </Router>
  )
}

export default AppRouter
