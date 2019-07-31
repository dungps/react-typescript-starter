import { RouterConfig } from "routers/AppRoute"
import route from "helpers/route"
import Login from "./views/Login"
import DefaultLayout from "components/layouts/DefaultLayout"

export default [
  {
    path: route.login,
    component: Login,
    exact: true,
    layout: DefaultLayout
    // layoutMiddleware: RouteAuth
  }
] as RouterConfig[]
