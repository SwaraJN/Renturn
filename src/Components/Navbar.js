import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Home from "./HomeC/Homess";
import Products from "./Products";
import "./Style/Navbar.css"
import Logo from "./HomeC/images/RenturnL.png"
export const Navbar = () => {
  return (
    <div className="nav ">
      <div >
        <nav>
          <div><img className="logo" src={Logo} alt="Logo" /></div>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/products">Products</Link>&nbsp;
          <Link to="/Signin">Login</Link> &nbsp;
          {/* <Link to="/Payment">Payment</Link> &nbsp; */}
        </nav>
      </div>
      <Switch>
        <Route path="/Signin" component={Signin} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
