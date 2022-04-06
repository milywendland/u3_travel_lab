const { GET_PLACES } = require('../types')

const iState = {
  places: []
}

const PlaceReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_PLACES:
      return { ...state, places: action.payload }
    default:
      return { ...state }
  }
}

export default PlaceReducer
