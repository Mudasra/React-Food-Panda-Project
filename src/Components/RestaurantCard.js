const RestaurantCard = ({ name , image , rating , cuisine}) => {
   return (
    <div className="card">
      <img className="card-img" src={image} />
      <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p className="card-rating">{rating}</p>
      <p className="card-cuisine">{cuisine}</p>
      </div>
    </div>
  )
}

export default RestaurantCard;