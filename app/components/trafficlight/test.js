// React
import React from 'react'
import { connect } from 'react-redux'

//TrafficLightComponent using react-leaflet
class TestComponent extends React.Component {
  render() {
    const trafficlight = this.props.trafficlight
    return (
        <div>
        <a className={"btn btn-block btn-lg " + (trafficlight.red ? "btn-danger" : "disabled")}>Red</a>
        <a className={"btn btn-block btn-lg " + (trafficlight.yellow ? "btn-warning" : "disabled")}>Yellow</a>
        <a className={"btn btn-block btn-lg "+ (trafficlight.green ? "btn-success" : "disabled") }>Green</a>
        </div>
    )
  }
}

// Function to map state to container props
const mapStateToTestProps = (state) => {
  return { trafficlight: state.trafficlight }
}

// Function to map dispatch to container props
const mapDispatchToTestProps = (dispatch) => {return {}}

// Redux container to Sites component
const Test = connect(
  mapStateToTestProps,
  mapDispatchToTestProps
)(TestComponent)

export default Test;
