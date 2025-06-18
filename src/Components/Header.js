const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"/>      
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    </div>
  )
}



export default Header;