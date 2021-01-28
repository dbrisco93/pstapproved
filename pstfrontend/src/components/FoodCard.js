import '../App.css'
import { Icon } from 'semantic-ui-react'

const FoodCard = props => {
    
    let likedFoods = props.likedFoods.map(food => food.name)
    if(props.isLoggedIn){
        return (
        <div className="food-column">
            <div className="food-card">
            <h4 key={props.food.id}>{props.food.name}</h4>
            
            
            {/* <img src={require('../images/'+image)} alt={name}></img> */}

            {props.food.restaurants.map((restaurant) => (
                <div>
                    <br></br>
                Restaurant Name:
                {restaurant.name}
                <br></br>
                <a href={restaurant.pst_url} target='_blank' rel="noopener noreferrer">View on Instagram</a>
                </div>
    
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
        let image = props.food.img_url
        let name = props.food.name
        return(
            <div className="food-column">
            <div className="food-card">
            <h4 key={props.food.id}>{props.food.name}</h4>
            
            
            {/* <img src={require('../images/'+image)} alt={name}></img> */}

            {props.food.restaurants.map((restaurant) => (
                <div>
                    <br></br>
                Restaurant Name:
                {restaurant.name}
                <br></br>
                <a href={restaurant.pst_url} target='_blank' rel="noopener noreferrer">View on Instagram</a>
                </div>
    
            )
            )}
            </div>
            </div>
        )
    }
}

export default FoodCard