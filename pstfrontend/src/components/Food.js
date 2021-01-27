import '../App.css';
import React from 'react'
import FoodCard from '../components/FoodCard'

class Food extends React.Component {
    // state = {
    //     foods: [],
    //     errors: [],    }

    //     componentDidMount() {
    //         fetch('http://localhost:3000/foods')
    //         .then(res => res.json())
    //         .then(foods => this.setState( { foods }))
    //     }

    render() {
        const foods = this.props.foods
        console.log(foods)
        return (
            
            <div className="Food">
               {foods.map((food) => 
               <FoodCard 
               food={food} 
               isLoggedIn={this.props.isLoggedIn}
               likeFood={this.props.likeFood}
               />)}
                
            </div>
        )
    }
}

export default Food