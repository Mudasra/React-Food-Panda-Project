import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Grocery from "../Components/Grocery";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();


  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkNxLjYjnWKfD3jfkqpiuC2Cqx2lc0AXdozRR9n8IJYO0CqaoeauJr3M&usqp=CAE&s"
          alt="FoodPanda Logo"          
        />
        {/* <img
          className="logo w-40"
          src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
          alt="FoodPanda Logo"          
        /> */}
      </div>

      
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      
      <nav className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul className="flex gap-6 justify-self-center">
          <li>Online Staus {onlineStatus ? "🟢" : "🔴"}</li>
          
          <li className="header-li "><Link to="/">Home</Link></li>
          <li className="header-li "><Link to="/about">About Us</Link></li>
          <li className="header-li "><Link to="/contact">Contact Us</Link></li>
          <li className="header-li "><Link to="/Grocery">Grocery</Link></li>
          <li>
            <i className="fa-solid fa-cart-shopping header-li"></i>
          </li>
          <li>
            <button
              className="header-btn"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
