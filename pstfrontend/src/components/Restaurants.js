import '../App.css';
import React from 'react'
import Map from './Map.js'
import RestaurantContainer from './RestaurantContainer.js'

class Restaurants extends React.Component {

    state = {
        clickedMap: true,
        zoom: 3,
        lat: 0,
        lng: 0,
    }


    render() {
        return (
            <div className="Restaurants">

                <RestaurantContainer 
                restaurants={this.props.restaurants} 
                isLoggedIn={this.props.isLoggedIn}
                likedRestaurants={this.props.likedRestaurants}
                likeRestaurant={this.props.likeRestaurant}
                dislikeRestaurant={this.props.dislikeRestaurant}/>

                <Map
                clicked={this.state.clickedMap}
                restaurants={this.props.restaurants}
                loggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
}

export default Restaurants