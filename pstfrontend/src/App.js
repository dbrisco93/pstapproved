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
  }

  componentDidMount(){
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true })
    }
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true})
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
    .then(addRestaurant => {
      if(!addRestaurant.msg){
        const newRestaurantList = [...this.state.likedRestaurants, addRestaurant]
        this.setState({ likedRestaurants: newRestaurantList })
      }
    })
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
    .then(addFood => {
      if(!addFood.msg){
        const newFoodList = [...this.state.likedFoods, addFood]
        this.setState({ likedFoods: newFoodList })
      }
    })
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
              isLoggedIn={this.state.isLoggedIn} 
              likedRestaurants={this.state.likedRestaurants} 
              likeRestaurant={this.likeRestaurant}/>
            }}/>

            <Route exact path="/foods" component={() => {
              return <Food 
              isLoggedIn={this.state.isLoggedIn} 
              likedFoods={this.state.likedFoods}
              likeFood={this.likeFood} />
            }}/>

            <Route exact path="/logout" component={() => {
              localStorage.clear()
              this.setState({ isLoggedIn: false, 
                likedRestaurants: [], 
                likedFoods: [] })
              return <Redirect to="/" />
            }}/>

            <Route exact path="/profile" component={() => {
              return <Profile 
              likedRestaurants={this.state.likedRestaurants} 
              likedFoods={this.state.likedFoods}/>
            }} /> 

        </Switch>
    </Router>
    )
  }
} 

export default App;