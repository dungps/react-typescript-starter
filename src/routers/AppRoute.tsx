import React from "react"
import { Redirect, Route } from "react-router-dom"

export interface RouterConfig {
  [key: string]: any
  redirect?: string
  path?: string
  layoutMiddleware?: React.ElementType
  component?: React.ElementType
  layout?: React.ElementType
  exact: boolean
}

export default (props: RouterConfig) => {
  if (props.redirect) {
    return <Redirect from={props.path} to={props.redirect} />
  } else if (props.layoutMiddleware) {
    return <props.layoutMiddleware {...props} />
  } else {
    const { component: Component, layout: Layout, ...rest } = props
    return (
      <Route
        {...rest}
        render={(appProps) => {
          return Layout ? (
            <Layout {...appProps}>{Component ? <Component {...appProps} /> : null}</Layout>
          ) : Component ? (
            <Component {...appProps} />
          ) : null
        }}
      />
    )
  }
}
