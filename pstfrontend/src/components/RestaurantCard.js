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

        <div><a href={props.restaurant.pst_url} target='_blank' rel="noopener noreferrer">Full review</a></div>
        <br></br>

        <a href={props.restaurant.ig_url} target='_blank' rel="noopener noreferrer"><Icon name="instagram" ></Icon></a>
        <a href={props.restaurant.website} target="_blank" rel="noreferrer"><Icon name="globe"></Icon></a>
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
        <div><a href={props.restaurant.pst_url} target='_blank' rel="noopener noreferrer">Full review</a></div>
        <br></br>

        <a href={props.restaurant.ig_url} target='_blank' rel="noopener noreferrer"><Icon name="instagram" ></Icon></a>
        <a href={props.restaurant.website} target="_blank" rel="noreferrer"><Icon name="globe"></Icon></a>
        <a href={props.restaurant.apple_url} target="_blank" rel="noopener noreferrer"><Icon name="apple"></Icon></a>
          
        </>
        )
    }
}

export default RestaurantCard

