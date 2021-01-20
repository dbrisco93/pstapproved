import '../App.css';
import React from 'react'

class Food extends React.Component {
    state = {
        foods: [],
        errors: [],    }

        componentDidMount() {
            fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(foods => this.setState( { foods }))
        }

    render() {
        return (
            <div className="Food">
                Some information about the foods up here and then
                
            </div>
        )
    }
}

export default Food