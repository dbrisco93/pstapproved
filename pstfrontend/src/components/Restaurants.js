import '../App.css';
import React from 'react'
import Map from './Map.js'
import RestaurantContainer from './RestaurantContainer.js'

class Restaurants extends React.Component {



    render() {
        return (
            <div className="Restaurants">

                <RestaurantContainer 
                restaurants={this.props.restaurants} 
                isLoggedIn={this.props.isLoggedIn}
                likedRestaurants={this.props.likedRestaurants}
                likeRestaurant={this.props.likeRestaurant}/>

                <Map 
                restaurants={this.props.restaurants}
                loggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
}

export default Restaurants