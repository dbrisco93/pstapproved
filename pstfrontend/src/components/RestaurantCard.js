import '../App.css'
import { Icon } from 'semantic-ui-react'

const RestaurantCard = props => {

    if(props.isLoggedIn){
        let likedRestaurants = props.likedRestaurants.map(restaurant => restaurant.name)
        return (

        <>
        {props.restaurant.name}
        <br></br>

        {props.restaurant.address}
        <br></br>

        {/* {`../images/${props.food.img_url}`} */}
        <a href={`${props.restaurant.pst_url}`}>My review</a>
        <br></br>

        <a href={props.ig_url}><Icon name="instagram" ></Icon></a>
        <a href={props.website} target="_blank" rel="noreferrer"><Icon name="globe"></Icon></a>
        {
            likedRestaurants.includes(props.restaurant.name)
            ?
            <button className="likebtn">
                <Icon name="bookmark" onClick={()=> props.dislikeRestaurant(props.restaurant)} className="float"/>    
            </button>
            :
            <button className="likebtn" onClick={() => props.likeRestaurant(props.restaurant)}>
                <Icon name="bookmark outline" className="float"/>
            </button>
        }
        </>

    )
    }else{
        return(
            <>
        {props.restaurant.name}
        <br></br>
        {props.restaurant.address}
        <br></br>
        <a href={props.ig_url}><Icon name="instagram" ></Icon></a>
        <a href={props.website} target="_blank" rel="noreferrer"><Icon name="globe"></Icon></a>

        <br></br>
        <a href={props.pst_url}>My review</a>
        <br></br>
          
        </>
        )
    }
}

export default RestaurantCard

