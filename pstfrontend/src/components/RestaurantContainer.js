import '../App.css'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantContainer = (props) => {
    console.log(props.restaurants)
    return (
      <div className="RestaurantContainer">
      <br></br>
              {props.restaurants.map((restaurant) => (
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