import './App.css';
import Navbar from '../src/components/Navbar.js'
import Main from '../src/components/Main.js'
import Login from '../src/components/Login.js'
import Signup from '../src/components/Signup.js'
import Restaurants from '../src/components/Restaurants'
import Food from '../src/components/Food.js'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => {
            return <Main />
          }}/>
          <Route exact path="/login" component={() => {
            return <Login />
          }}/>
          <Route exact path="/signup" component={() => {
            return <Signup />
          }}/>
          <Route exact path="/restaurants" component={() => {
            return <Restaurants />
          }}/>
          <Route exact path="/foods" component={() => {
            return <Food />
          }}/>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
