import React, { PureComponent } from "react"
import { BeatLoader } from "react-spinners"

class Spinner extends PureComponent {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BeatLoader sizeUnit="px" size={20} loading color="#152e4d" />
      </div>
    )
  }
}

export default Spinner
