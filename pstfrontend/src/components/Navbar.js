import '../App.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const handleLoginRender = (isLoggedIn) => {
    if(isLoggedIn){
      return (
          <div className="dropdown">
            <button className="dropbtn">Checkmate Corner
            <Icon name="dropdown"/>
            </button>
            <div className="dropdown-content">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
            </div>
          </div>

      )
    }else{
      return(
        <div className="dropdown">
            <button className="dropbtn">Checkmate Signin
            <Icon name="dropdown"/>
            </button>
            <div className="dropdown-content">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            </div>
        </div>

        
      )
    }
}

const Navbar = (props) => {

        
    return (
        <div className="navigation">
            <NavLink exact to='/' activeClassName='toplink'>Home</NavLink>
            <NavLink exact to='/restaurants' activeClassName='toplink'>Restaurants</NavLink>
            <NavLink exact to='/foods' activeClassName='toplink'>Foods</NavLink>
            {
                handleLoginRender(props.isLoggedIn)
            }
        </div>


        )
}

export default Navbar