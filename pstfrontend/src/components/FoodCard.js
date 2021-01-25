import '../App.css'
import { Icon } from 'semantic-ui-react'

const FoodCard = props => {
    if(props.isLoggedIn){
        return (
        <>
        <p key={props.food.id}>{props.food.name}</p>
        
        {
        props.likedFood
        ?
        <button className="likebtn"><Icon name="bookmark" /></button>
        :
        <button className="likebtn" 
        onClick={()=> props.likeFood(props.food)}>
        <Icon name="bookmark outline" /></button>
        }
        </>
    )
    }else{
        return(
            <>
            <p>{props.food.name}</p>
            
            </>
        )
    }
}

export default FoodCard