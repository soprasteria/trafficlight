import React from 'react'

import TrafficLight from '../trafficlight/trafficlight.js'
import NavBar from '../navbar/navbar.js'

class Main extends React.Component {
  render() {
    return (
      <div id="rootReact">
        <NavBar/>
        <div id="rootLayout" className="row">
          <div className="trafficlight col-xs-4 col-md-3"><TrafficLight/></div>
          <div className="view-tl col-xs-8 col-md-9">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Main;
