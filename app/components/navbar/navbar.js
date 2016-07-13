// React
import React from 'react'
import { connect } from 'react-redux'

//TrafficLightComponent using react-leaflet
class NavBarComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Trafficlight</a>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <li><a href="#fakelink">Feu 1</a></li>
          <li><a href="#fakelink">Feu 2</a></li>
          <li><a href="#fakelink">Feu 3</a></li>
        </ul>
      </nav>
    )
  }
}

// Function to map state to container props
const mapStateToNavBarProps = (state) => {return {}}

// Function to map dispatch to container props
const mapDispatchToNavBarProps = (dispatch) => {return {}}

// Redux container to Sites component
const NavBar = connect(
  mapStateToNavBarProps,
  mapDispatchToNavBarProps
)(NavBarComponent)

export default NavBar;
