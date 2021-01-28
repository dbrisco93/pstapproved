import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Main = () => {
    return (
        <div className="Main">
            <div className="logo">
            <p className="title">PSTApproved</p>
                <p classname="subtitle">Houston Foodie</p>
                <div classname="main-btn"><NavLink to="/restaurants">Browse Restaurants</NavLink></div>
                <div classname="main-btn"><NavLink to="/foods">Browse Food</NavLink></div>
                <p><button className="igButton"><Icon name="instagram" size="huge"></Icon></button></p>

            </div>
                

        </div>

    )
}

export default Main