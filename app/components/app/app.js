import React from 'react'

import TrafficLight from '../trafficlight/trafficlight.js'
import NavBar from '../navbar/navbar.js'

class Main extends React.Component {
  render() {
    return (
      <div id="rootReact">
        <NavBar/>
        <div id="rootLayout" className="layout horizontal">
          <TrafficLight className="flex-2"/>
          <div className="flex-10">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Main;
