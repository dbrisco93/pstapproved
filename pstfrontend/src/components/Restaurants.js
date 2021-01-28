import '../App.css';
import React from 'react'
import Map from './Map.js'
import RestaurantContainer from './RestaurantContainer.js'

class Restaurants extends React.Component {

    state = {
        searchTerm: ''
    }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }


    render() {
        return (
            <div className="Restaurants">

                <RestaurantContainer 
                restaurants={this.props.restaurants} 
                isLoggedIn={this.props.isLoggedIn}
                likedRestaurants={this.props.likedRestaurants}
                likeRestaurant={this.props.likeRestaurant}
                dislikeRestaurant={this.props.dislikeRestaurant}
                search={this.handleSearch}
                searchTerm={this.state.searchTerm}/>

                <Map
                clicked={this.state.clickedMap}
                restaurants={this.props.restaurants}
                loggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
}

export default Restaurants