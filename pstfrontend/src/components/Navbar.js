import '../App.css'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {


    render() {
        
        return (
            <div className="navigation">
                <span className="login-link">
                    <NavLink exact to='/login' activeClassName='toplink'>Login</NavLink>
                </span>
                <span className="home-link">
                    <NavLink exact to='/' activeClassName='toplink'>Home</NavLink>
                </span>
                <span className="signup-link">
                    <NavLink exact to='/signup' activeClassName='toplink'>Signup</NavLink>
                </span>
                <span className="restaurants-link">
                    <NavLink exact to='/restaurants' activeClassName='toplink'>Restaurants</NavLink>
                </span>
                <span className="food-link">
                    <NavLink exact to='/foods' activeClassName='toplink'>Foods</NavLink>
                </span>


            </div>
        )
    }
}

export default Navbar