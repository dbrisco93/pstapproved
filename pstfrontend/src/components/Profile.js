
const Profile = (props) => {
  console.log(props.likedRestaurants)
    return (
      <div className="Profile">
        <h2>Username</h2>
        <h2>Liked Restaurants</h2>
        {props.likedRestaurants.map(place => (
        <p key={place.restaurant.id}>{place.restaurant.name}</p>))}

        
        <h2>Liked Foods</h2>
        {props.likedFoods.map(item => (
        <p key={item.food.id}>{item.food.name}</p>))}
      
      </div>
    );
  }
  
  export default Profile;
  