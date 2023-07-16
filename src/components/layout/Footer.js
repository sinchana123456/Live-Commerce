import React from 'react'
import {BsYoutube, BsSpotify, BsFacebook} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <h1>My Ticket Store</h1>
    <div className='footer-container'>
      <h2>How Can We Help You?</h2>
      <h3>About Us</h3>
      <h4>Terms and Conditions</h4>
      <h5>Privacy Policy</h5>
      <h5>Contact Us</h5>
      <h5>FAQ's</h5>
    </div>
    <ul>
        <li>
          <NavLink to="https://www.youtube.com">
            <BsYoutube color='red' size="35px"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://spotify.com">
            <BsSpotify color='green' size="30px"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://facebook.com">
            <BsFacebook  size="30px"/>
          </NavLink>
        </li>
    </ul>
    </footer>
  );
};

export default Footer;