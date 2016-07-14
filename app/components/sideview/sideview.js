// React
import React from 'react'
import { connect } from 'react-redux'
import SVActivation from '../sideview/activation.js'

//TrafficLightComponent using react-leaflet
class SideViewComponent extends React.Component {
  render() {
    return (
      <div className="sideview">

      <SVActivation />
      <div className="panel-group" id="accordion">
        <div className="panel panel-default sideview-section">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
              Gitlab CDK</a>
              <div className="sideview-section-toolbox">
                <span className="fui-question-circle" data-toggle="tooltip" data-placement="left"
                title="This is a <i>provider</i>. Trafficlight app combines the status of all <i>providers</i> (Gitlab, Jenkins, etc.) to output one current status">
                </span>
                <span className="fui-trash" data-toggle="tooltip" data-placement="left"
                title="Delete the provider">
                </span>
                <span className="circle-icon palette-emerald">
                </span>
              </div>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse in">
            <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</div>
          </div>
        </div>
        <div className="panel panel-default sideview-section">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
              Jenkins CDK</a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse">
            <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  componentDidMount(){
    $('[data-toggle="switch"]').bootstrapSwitch();
    $('[data-toggle="tooltip"]').tooltip({"html": true});
  }
}

// Function to map state to container props
const mapSideViewComponentProps = (state) => {
  return {}
}

// Function to map dispatch to container props
const mapDispatchToSideViewComponentProps = (dispatch) => {
  return {
  }
}

// Redux container to Side view component
const SideView = connect(
  mapSideViewComponentProps,
  mapDispatchToSideViewComponentProps
)(SideViewComponent)

export default SideView;
