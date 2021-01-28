import '../App.css'
import RestaurantCard from '../components/RestaurantCard'
import { Icon } from 'semantic-ui-react'

const RestaurantContainer = (props) => {
    
  let restaurants = props.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase()))

    return (
      <div className="RestaurantContainer">
        <div className="search">
          <span><Icon name="search" className="fa-search"></Icon></span>
        <input onChange={(e)=> props.search(e)} className="prompt" placeholder="Search"/>

        </div>

      <br></br>
              {restaurants.map((restaurant) => (
                  <div className="card-design" key={restaurant.id}>
                      <RestaurantCard 
                        restaurant={restaurant}
                          isLoggedIn={props.isLoggedIn}
                          likeRestaurant={props.likeRestaurant}
                          likedRestaurants={props.likedRestaurants}
                          dislikeRestaurant={props.dislikeRestaurant} />
                  </div>
              ))}

      </div>
    );
  }
  
  export default RestaurantContainer;