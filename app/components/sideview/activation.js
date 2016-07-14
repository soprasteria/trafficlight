// React
import React from 'react'
import { connect } from 'react-redux'

//TrafficLightComponent using react-leaflet
class SVActivationComponent extends React.Component {
  render() {

    return (
      <div className="sideview-section">
        <div className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-id-custom-switch-01 bootstrap-switch-on">
          <div className="bootstrap-switch-container">
            <span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span>
            <label className="bootstrap-switch-label">&nbsp;</label>
            <span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span>
            <input type="checkbox" checked="" data-toggle="switch" />
          </div>
        </div>
        <span className="fui-question-circle help-button" data-toggle="tooltip" data-placement="right"
        title="<b>Enabled</b>, trafficlight gets its current light color automatically. <br/><b>Disabled</b>, it is let to the user manual choice.">
        </span>
      </div>
    )
  }
}

// Function to map state to container props
const mapSVActivationComponentProps = (state) => {
  return {}
}

// Function to map dispatch to container props
const mapDispatchToSVActivationComponentProps = (dispatch) => {
  return {
  }
}

// Redux container to Side view component
const SVActivation = connect(
  mapSVActivationComponentProps,
  mapDispatchToSVActivationComponentProps
)(SVActivationComponent)

export default SVActivation;
