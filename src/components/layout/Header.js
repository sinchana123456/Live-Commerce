import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink exact activeClassName={classes.active} to="/home">HOME</NavLink>
        <NavLink activeClassName={classes.active} to="/store">TICKET STORE</NavLink>
        <NavLink activeClassName={classes.active} to="/dreamcar">DREAM CAR</NavLink>
        <NavLink activeClassName={classes.active} to="/newsandupdates">NEWS & UPDATES</NavLink>
        <NavLink activeClassName={classes.active} to="/winners">WINNERS</NavLink>
        <NavLink activeClassName={classes.active} to="/drawdates">DRAW DATES</NavLink>
        {/* <NavLink activeClassName={classes.active} to="/storelocator">STORE LOCATOR</NavLink> */}
        <NavLink activeClassName={classes.active} to="/login">LOGIN</NavLink>

        <CartButton onClick={props.onShow} data={props.data}/>
      </header>
      <HeaderBottom />
    </Fragment>
  );
};

export default Header;
