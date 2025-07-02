const RestaurantCard = ({ name , image , rating , cuisine}) => {
   return (
    <div className=" card Res-card">
      <img className="card-img" src={image} />
      <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p className="card-rating">{rating}</p>
      <p className="card-cuisine">{cuisine}</p>
      </div>
    </div>
  )
}

export const Promoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>  
          <label>Promoted</label>
          <RestaurantCard {...props}/>
      </div>
    )
  }
 }

export default RestaurantCard;