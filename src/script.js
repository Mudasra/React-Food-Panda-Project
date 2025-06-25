import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";




const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <main className="content">
        <Outlet/>
      </main>
      <Footer />
      
    </div>
  )
};


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
  
      },
      {
    path: "/about",
    element: <About/>
  },
   {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/restaurant/:resID",
    element: <RestaurantMenu/>
  }
  ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {AppRouter}/>);