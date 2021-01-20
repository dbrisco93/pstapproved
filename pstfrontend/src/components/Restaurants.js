import '../App.css';
import React from 'react'
import Map from './Map.js'

class Restaurants extends React.Component {
    state = {
        restaurants: [],
        errors: [],    }

        componentDidMount() {
            fetch('http://localhost:3000/restaurants')
            .then(res => res.json())
            .then(restaurants => this.setState( { restaurants }))
        }

    render() {
        return (
            <div className="Restaurants">
                Some information about the restaurants up here and then
                <Map restaurants={this.state.restaurants}/>
            </div>
        )
    }
}

export default Restaurants