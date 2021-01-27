import '../App.css'
import { Icon } from 'semantic-ui-react'

const RestaurantCard = props => {

  

    if(props.isLoggedIn){
        let likedRestaurants = props.likedRestaurants.map(restaurant => restaurant.name)
        return (

        <>
        {props.restaurant.name}
        {/* {props.restaurant.address} */}
        {
            likedRestaurants.includes(props.restaurant.name)
            ?
            <button className="likebtn">
                <Icon name="bookmark" onClick={()=> props.dislikeRestaurant(props.restaurant)}/>    
            </button>
            :
            <button className="likebtn" onClick={() => props.likeRestaurant(props.restaurant)}>
                <Icon name="bookmark outline" />
            </button>
        }
        </>

    )
    }else{
        return(
            <>
            {props.restaurant.name}
            </>
        )
    }
}

export default RestaurantCard

// { props.liked
//     ?
//   <Icon name='heart'/>
//     :
//   <Icon name="heart outline"/>
// }