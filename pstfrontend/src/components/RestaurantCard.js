import '../App.css'
import { Icon } from 'semantic-ui-react'

const RestaurantCard = props => {
    if(props.isLoggedIn){
        return (
        <>
        {props.restaurant.name}
        {
        props.likedRestaurants.includes(props.restaurant)
        ?
        <button className="likebtn"><Icon name="bookmark" /></button>
        :
        <button className="likebtn" onClick={()=> props.likeRestaurant(props.restaurant)}>
        <Icon name="bookmark outline" /></button>
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