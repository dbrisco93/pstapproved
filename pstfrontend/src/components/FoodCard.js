import '../App.css'
import { Icon } from 'semantic-ui-react'

const FoodCard = props => {
    
    let likedFoods = props.likedFoods.map(food => food.name)
    if(props.isLoggedIn){
        return (
        <div className="food-column">
            <div className="food-card">
            <h4 key={props.food.id}>{props.food.name}</h4>
            <img src={`../images/${props.food.img_url}`} alt={props.img_url}></img>
            {props.food.restaurants.map((restaurant) => (
                <p>{restaurant.name}</p>
            )
            )}
                {
            
                    likedFoods.includes(props.food.name)
                    ?
                    <button className="likebtn">
                        <Icon name="bookmark" onClick={()=> props.dislikeFood(props.food)}/>    
                    </button>
                    :
                    <button className="likebtn" onClick={() => props.likeFood(props.food)}>
                        <Icon name="bookmark outline" />
                    </button>
                }
            </div>
        </div>
    )
    }else{
        console.log(props.food.img_url)
        return(
            <div className="food-column">
            <div className="food-card">
            <h4 key={props.food.id}>{props.food.name}</h4>
            
            <img src={`../images/${props.food.img_url}`} alt={props.img_url}></img>
            {props.food.restaurants.map((restaurant) => (
                <p>{restaurant.name}</p>
            )
            )}
            </div>
            </div>
        )
    }
}

export default FoodCard