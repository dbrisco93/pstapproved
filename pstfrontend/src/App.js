import './App.css';
import Navbar from '../src/components/Navbar.js'
import Main from '../src/components/Main.js'
import Login from '../src/components/Login.js'
import Signup from '../src/components/Signup.js'
import Restaurants from '../src/components/Restaurants'
import Food from '../src/components/Food.js'
import Profile from '../src/components/Profile.js'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  state = {
    isLoggedIn: false,
    likedRestaurants: [],
    likedFoods: [],
    name: '',
    username: '',
    restaurants: [],
    foods: []
  }

  componentDidMount(){
    // if(localStorage.getItem('auth_key')){
    //   this.setState({ isLoggedIn: true })
    // }
    Promise.all([
      fetch('http://localhost:3000/restaurants'),
      fetch('http://localhost:3000/foods')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([restaurants, foods]) => this.setState({
      restaurants,
      foods
    }))
  }

  handleLogin = (data) => {
    if(localStorage.getItem('auth_key')){
      this.setState({ 
        isLoggedIn: true,
        likedFoods: data.info.liked_foods,
        likedRestaurants: data.info.liked_restaurants,
        username: data.info.username,
        name: data.info.name
      })
      console.log(this.state)

    }
  }


 

  likeRestaurant = (newRestaurant) => {
    fetch('http://localhost:3000/liked_restaurants',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Auth-Key': localStorage.getItem('auth_key')
      },
      body: JSON.stringify({restaurant_id: newRestaurant.id})
    })
    .then(res => res.json())
    .then(restaurant => {
      const newRestaurantsList = [...this.state.likedRestaurants, restaurant.restaurant]
      this.setState({ likedRestaurants: newRestaurantsList })
    }
    )
  }

  likeFood = (newFood) => {
    
    fetch('http://localhost:3000/liked_foods',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Auth-Key': localStorage.getItem('auth_key')
      },
      body: JSON.stringify({food_id: newFood.id})
    })
    .then(res => res.json())
    .then(food => {
      const newFoodsList = [...this.state.likedFoods, food.food]
      this.setState({ likedFoods: newFoodsList })
    }
    )
  }



  render(){
    return (
      <Router>
        <Navbar 
          isLoggedIn={this.state.isLoggedIn} 
          handleItemClick={this.handleItemClick}/>
        
        <Switch>

            <Route exact path="/" component={() => {
              return <Main />
            }}/>

            <Route exact path="/login" component={() => {
              return <Login 
              handleLogin={this.handleLogin}/>
            }}/>

            <Route exact path="/signup" component={() => {
              return <Signup 
              handleLogin={this.handleLogin} />
            }}/>

            <Route exact path="/restaurants" component={() => {
              return <Restaurants
              restaurants={this.state.restaurants}
              isLoggedIn={this.state.isLoggedIn} 
              likedRestaurants={this.state.likedRestaurants} 
              likeRestaurant={this.likeRestaurant}/>
            }}/>

            <Route exact path="/foods" component={() => {
              return <Food 
              foods={this.state.foods}
              isLoggedIn={this.state.isLoggedIn} 
              likedFoods={this.state.likedFoods}
              likeFood={this.likeFood} />
            }}/>

            <Route exact path="/logout" component={() => {
              localStorage.clear()
              this.setState({ isLoggedIn: false, 
              likedRestaurants: [], 
              likedFoods: [],
              name: '',
              username: ''
              })
              return <Redirect to="/" />
            }}/>

            <Route exact path="/profile" component={() => {
              return <Profile 
              likedRestaurants={this.state.likedRestaurants} 
              likedFoods={this.state.likedFoods}
              name={this.state.name}
              username={this.state.username}/>
            }} /> 

        </Switch>
    </Router>
    )
  }
} 

export default App;