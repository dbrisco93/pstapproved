import React from 'react'
import Icon from 'semantic-ui-react'

const Profile = (props) => {
  return (
    <div className="Profile">
      <h2>Username:</h2><h2>{props.username}</h2>
      <h2>Name:</h2><h2>{props.name}</h2>
      <h2>Liked Restaurants</h2>
      {
        props.likedRestaurants.map(place => 
          <h4 key={place.id}>{place.name}</h4>)
      }
  <h2>Liked Foods</h2>
      {
        props.likedFoods.map(food => 
          <h4 key={food.id}>{food.name}</h4>
          
          
          
          
          )
      }
    </div>
  )
}





  
  export default Profile;
  