// import { useState } from "react";

// const Header = () => {

//   const [btnName, setBtnName] = useState("Login");

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
//         />
//       </div>

//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>
//             <i className="fa-solid fa-cart-shopping"></i>
//           </li>
//           <button
//             className="login-btn"
//             onClick={() => {
//               btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
//             }}
//           >
//             {btnName}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;







import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
          alt="FoodPanda Logo"
        />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button
              className="login-btn"
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
