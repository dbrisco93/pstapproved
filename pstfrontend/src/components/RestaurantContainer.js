import '../App.css'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantContainer = (props) => {
    console.log(props.restaurants)
    return (
      <div className="RestaurantContainer">
          <ol>
              {props.restaurants.map((restaurant) => (
                  <li key={restaurant.id}>
                      <RestaurantCard 
                        restaurant={restaurant}
                          isLoggedIn={props.isLoggedIn}
                          likeRestaurant={props.likeRestaurant}
                          likedRestaurants={props.likedRestaurants} />
                  </li>
              ))}
          </ol>
      </div>
    );
  }
  
  export default RestaurantContainer;