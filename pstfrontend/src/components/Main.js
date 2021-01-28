import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Main = () => {
    return (
        <div className="Main">
            <div className="logo">
            <p className="title">PSTApproved</p>
                <div className="main-btn"><NavLink to="/restaurants">Browse Restaurants</NavLink></div>
                <br></br>
                <div className="main-btn"><NavLink to="/foods">Browse Food</NavLink></div>
                <a href="http://instagram.com/pstapproved" target='_blank' rel="noopener noreferrer">
                    <br></br>
                    <div className="text">
                    <button className="igButton">
                        <Icon name="instagram" size="huge"></Icon>
                    </button>
                    </div>

                </a>

            </div>
                

        </div>

    )
}

export default Main