import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Main = () => {
    return (
        <div className="Main">
            <div className="logo">
            <p>PSTApproved</p>
                <p>Houston Foodie</p>
                <p><NavLink to="/restaurants">Browse Restaurants</NavLink></p>
                <p><NavLink to="/foods">Browse Food</NavLink></p>
                <p><button className="igButton"><Icon name="instagram" size="huge"></Icon></button></p>

            </div>
                

        </div>

    )
}

export default Main