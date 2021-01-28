import React from 'react'

const Profile = (props) => {
  return (
    <div className="Profile">
      {/* <div className="profile-info">
      <h2>Username:   {props.username}</h2>
      <h2>Name:   {props.name}</h2>
      
      </div> */}
      <div className="liked-container">
      <div className="liked-restaurants">

      <h2>Liked Restaurants</h2>
      <hr></hr>
      {
        props.likedRestaurants.map(place => 
          <h4 key={place.id}>{place.name}</h4>)
      }
      </div>

      <div className="liked-foods">
        <h2>Liked Foods</h2>
        <hr></hr>
        {
          props.likedFoods.map(food => 
            <h4 key={food.id}>{food.name}</h4>)
        }
    </div>
    </div>

  
    </div>
  )
}





  
  export default Profile;
  