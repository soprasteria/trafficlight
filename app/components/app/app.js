import React from 'react'

import TrafficLight from '../trafficlight/trafficlight.js'
import NavBar from '../navbar/navbar.js'

class Main extends React.Component {
  render() {
    return (
      <div id="rootReact">
        <NavBar/>
        <div id="rootLayout" className="row">
          <div className="trafficlight col-xs-1 col-md-1"><TrafficLight/></div>
          <div className="view-tl col-xs-11 col-md-11">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Main;
