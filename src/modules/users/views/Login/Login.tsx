import React, { PureComponent, Fragment, MouseEvent } from "react"
import { compose } from "redux"
import { injectIntl, InjectedIntl } from "react-intl"
import { withRouter } from "react-router"
import { Form, FormGroup, Label, Input, Button, InputGroup, FormFeedback, Row, Col } from "reactstrap"
import { UserReduxProps, withRedux } from "./redux"

interface Props extends UserReduxProps {
  intl: InjectedIntl
}

class LoginScreen extends PureComponent<Props> {
  private emailInput: HTMLInputElement | null
  private passwordInput: HTMLInputElement | null
  private passwordIElem: HTMLElement | null

  constructor(props: Props) {
    super(props)

    this.emailInput = null
    this.passwordInput = null
    this.passwordIElem = null
  }

  async handleSubmit(e: MouseEvent) {
    e.preventDefault()
    if (!this.emailInput || !this.passwordInput) return

    await this.props.userActions.login({
      username: this.emailInput.value,
      password: this.passwordInput.value
    })
  }

  render() {
    const { intl } = this.props

    return (
      <Fragment>
        <Form>
          <FormGroup>
            <Label htmlFor="Email">{intl.formatMessage({ id: "users.emailLabel" })}</Label>
            <Input
              // invalid={notEmail}
              type="email"
              placeholder="name@address.com"
              name="email"
              innerRef={(e) => (this.emailInput = e)}
            />
          </FormGroup>

          <FormGroup>
            <Row>
              <Col>
                <Label htmlFor="Password">{intl.formatMessage({ id: "users.passwordLabel" })}</Label>
              </Col>
            </Row>
            <InputGroup className="input-group input-group-merge">
              <Input
                // type={showPassword ? "password" : "text"}
                className="form-control form-control-appended "
                placeholder="Enter your password"
                name="password"
                innerRef={(e) => (this.passwordInput = e)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i
                    className={`fe fe-eye-off`}
                    ref={(e) => (this.passwordIElem = e)}
                    onClick={(e: MouseEvent) => {
                      if (this.passwordInput) {
                        switch (this.passwordInput.type) {
                          case "text":
                          default:
                            this.passwordInput.type = "password"
                            if (this.passwordIElem) {
                              this.passwordIElem.classList.add("fe-eye-off")
                              this.passwordIElem.classList.remove("fe-eye")
                            }
                            break
                          case "password":
                            this.passwordInput.type = "text"
                            if (this.passwordIElem) {
                              this.passwordIElem.classList.remove("fe-eye-off")
                              this.passwordIElem.classList.add("fe-eye")
                            }
                            break
                        }
                      }
                    }}
                  />
                </span>
              </div>
            </InputGroup>
          </FormGroup>
          <Button type="submit" className="mb-3" color="primary" block onClick={this.handleSubmit.bind(this)}>
            {intl.formatMessage({
              id: "users.loginBtn"
            })}
          </Button>
        </Form>
      </Fragment>
    )
  }
}

export default compose(
  withRedux,
  injectIntl,
  withRouter
)(LoginScreen)
