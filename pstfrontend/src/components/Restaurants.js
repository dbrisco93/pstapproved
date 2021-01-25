import '../App.css';
import React from 'react'
import Map from './Map.js'
import RestaurantContainer from './RestaurantContainer.js'
import { Icon } from 'semantic-ui-react'

class Restaurants extends React.Component {

    state = {
        restaurants: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(restaurants => this.setState({ restaurants }))
    }


    render() {
        return (
            <div className="Restaurants">

                <RestaurantContainer 
                restaurants={this.state.restaurants} 
                isLoggedIn={this.props.isLoggedIn}
                likedRestaurants={this.props.likedRestaurants}
                likeRestaurant={this.props.likeRestaurant}/>

                <Map 
                restaurants={this.state.restaurants}
                loggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
}

export default Restaurants