import '../App.css'
import { Button, Icon } from 'semantic-ui-react'

const RestaurantContainer = (props) => {
    return (
      <div className="RestaurantContainer">
          <ol>
              {props.restaurants.map((restaurant) => (
                  <li key={restaurant.id}>{restaurant.name} 
                  <Button icon onClick={props.likeRestaurant}>
                  <Icon name='heart outline' onClick={props.likeRestaurant(restaurant)}/>
                  </Button>
                  </li>
              ))}
          </ol>
      </div>
    );
  }
  
  export default RestaurantContainer;