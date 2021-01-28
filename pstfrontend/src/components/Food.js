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
            console.log(this.props.likedFoods)
        return (
            
            <div className="Food">
                <div className="food-container">
               {foods.map((food) => 
               <FoodCard 
               food={food} 
               likedFoods={this.props.likedFoods}
               isLoggedIn={this.props.isLoggedIn}
               likeFood={this.props.likeFood}
               dislikeFood={this.props.dislikeFood}

               />)}
                </div>
            </div>
        )
    }
}

export default Food