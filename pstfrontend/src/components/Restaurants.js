import '../App.css';
import React from 'react'
import Map from './Map.js'

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

                <ul>
                    {this.state.restaurants.map(restaurant => (
                        <li>{restaurant.name} <button>❤️</button></li>
                    ))}
                </ul>

                <Map restaurants={this.state.restaurants}/>
            </div>
        )
    }
}

export default Restaurants