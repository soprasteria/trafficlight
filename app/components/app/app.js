import React from 'react'

import TrafficLight from '../trafficlight/trafficlight.js'
import NavBar from '../navbar/navbar.js'
import SideView from '../sideview/sideview.js'

class Main extends React.Component {
  render() {
    return (
      <div id="rootReact">
        <NavBar/>
        <div id="rootLayout" className="layout horizontal">
          <TrafficLight className="flex-2"/>
          <SideView className="flex-10"/>
        </div>
      </div>
    )
  }
}

export default Main;
