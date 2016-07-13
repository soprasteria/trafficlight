// React
import React from 'react'
import { connect } from 'react-redux'

import { lightStatusChanged } from '../../actions/lights.actions.js'

//TrafficLightComponent using react-leaflet
class TrafficLightComponent extends React.Component {
  render() {
    const changeStatus = this.props.changeStatus
    const trafficlight = this.props.trafficlight
    return (
      <div className="trafficlight layout vertical around-justified center height-fill">
        <div className="flex-2"></div>
        <img className={"tl-light tl-red "+ (trafficlight.red ? "tl-enable" : "")} src="./app/components/trafficlight/images/red-light.png" onClick={() => changeStatus('failed')}/>
        <img className={"tl-light tl-yellow " + (trafficlight.yellow ? "tl-enable" : "")} src="./app/components/trafficlight/images/yellow-light.png" onClick={() => changeStatus('unstable')}/>
        <img className={"tl-light tl-green "+ (trafficlight.green ? "tl-enable" : "")} src="./app/components/trafficlight/images/green-light.png" onClick={() => changeStatus('success')}/>
        <div className="flex-2"></div>
      </div>
    )
  }
}

// Function to map state to container props
const mapStateToTrafficLightProps = (state) => {
  return { trafficlight: state.trafficlight }
}

// Function to map dispatch to container props
const mapDispatchToTrafficLightProps = (dispatch) => {
  return {
    changeStatus: status => {
      dispatch(lightStatusChanged(status))
    }
  }
}

// Redux container to Sites component
const TrafficLight = connect(
  mapStateToTrafficLightProps,
  mapDispatchToTrafficLightProps
)(TrafficLightComponent)

export default TrafficLight;
