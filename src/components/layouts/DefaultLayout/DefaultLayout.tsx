import React, { PureComponent, Fragment } from "react"

interface Props {
  title: string
  children: React.ElementType
}

class DefaultLayout extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <div className="container min-vh-100">
          <div className="row min-vh-100 align-items-center justify-content-center">
            <div className="col-md-4">
              <h1 className="display-4 text-center mb-5">{this.props.title}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default DefaultLayout
