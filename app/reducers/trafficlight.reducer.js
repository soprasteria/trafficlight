import {LIGHT_STATUS_CHANGED} from '../actions/lights.actions.js'

const initialState = {
    red: false,
    yellow: false,
    green: false
}

const trafficLightReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_STATUS_CHANGED :
          return computeTrafficLight(action.state)
        default:
            return state
    }
}

const computeTrafficLight = (status) => {
  switch (status) {
      case "failed" :
        return {red:true, yellow: false, green : false}
      case "unstable" :
        return {red:false, yellow: true, green : false}
      case "success" :
        return {red:false, yellow: false, green : true}
      default:
        return initialState
  }
}

export default trafficLightReducer
