import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import wBooks from "../../assets/photos/wBooks.png";
import profilePicture from "../../assets/photos/profilePicture.png";
import newBook from "../../assets/photos/newBook.png";
import notificationBell from "../../assets/photos/notificationBell.png";
import { WBOOKS } from "./strings";
import Logo from "../Logo";

const NavBar = () => (
  <div className="nav_box">
    <Link to="/">
      <Logo picture={wBooks} text={WBOOKS} />
    </Link>
    <img src={notificationBell} />
    <img src={newBook} />
    <img className="profile" src={profilePicture} />
  </div>
);

export default NavBar;
