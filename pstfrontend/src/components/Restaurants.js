import '../App.css';
import React from 'react'
import Map from './Map.js'
import RestaurantContainer from './RestaurantContainer.js'
import { Icon } from 'semantic-ui-react'

class Restaurants extends React.Component {

    state = {
        restaurants: [],
        isLiked: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(restaurants => this.setState({ restaurants }))
    }

    likeRestaurant = (restaurant) => {
        fetch(`http://localhost:3000/liked_restaurants`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-key': localStorage.getItem('token')
            },
            body: JSON.stringify({
                restaurant_id: restaurant.id,
                user_id: 1
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)})
    }



    render() {
        return (
            <div className="Restaurants">

                <RestaurantContainer restaurants={this.state.restaurants} likeRestaurant={this.likeRestaurant} />
                <Map restaurants={this.state.restaurants}/>
            </div>
        )
    }
}

export default Restaurants