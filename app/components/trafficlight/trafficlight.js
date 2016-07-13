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
      <div className="layout vertical around-justified height-fill">
        <div className="flex lightContainer"><div className="tl-light tl-red"></div></div>
        <div className="flex lightContainer"><div className="tl-light tl-yellow"></div></div>
        <div className="flex lightContainer"><div className="tl-light tl-green"></div></div>
      </div>
    )
  }
}

//<a className="btn btn-block btn-lg btn-danger" onClick={() => changeStatus('failed')}>Red</a>
//<a className="btn btn-block btn-lg btn-warning" onClick={() => changeStatus('unstable')}>Yellow</a>
//<a className="btn btn-block btn-lg btn-success" onClick={() => changeStatus('success')}>Green</a>


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
