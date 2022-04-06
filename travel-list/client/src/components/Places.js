import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadPlaces } from '../store/actions/PlaceActions'

const mapStateToProps = ({ placeState }) => {
  return { placeState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: () => dispatch(LoadPlaces())
  }
}

const Places = (props) => {
  useEffect(() => {
    props.fetchPlaces()
  }, [])

  return (
    <div className="places">
      {props.placeState.places.map((place) => (
        <ul key={place.id}>
          <li key={place.id}>
            {place.name}
            <img src={place.image} alt={place.name}></img>
            <p>{place.description}</p>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Places)
