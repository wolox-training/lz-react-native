import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import wBooks from "../../assets/photos/wBooks.png";
import profilePicture from "../../assets/photos/profilePicture.png";
import newBook from "../../assets/photos/newBook.png";
import notificationBell from "../../assets/photos/notificationBell.png";
import { WBOOKS, LOGO_SIZE } from "./strings";
import Logo from "../Logo";
import DropdownContainer from "../Dropdown";
import Notification from "../Notification";

const NavBar = ({
  onPictureClick,
  showDropdown,
  showNotification,
  onNotificationClick
}) => (
  <div className="nav_box">
    <div className="logo_box">
      <Link to="/">
        <Logo picture={wBooks} text={WBOOKS} size={LOGO_SIZE} />
      </Link>
    </div>
    <div className="images_box">
      <img
        alt=""
        className="nav_image"
        src={notificationBell}
        onClick={onNotificationClick}
      />
      <Notification show={showNotification ? "show" : "unshow"} />
      <img alt="" className="nav_image" src={newBook} />
      <img
        alt=""
        className="nav_image"
        src={profilePicture}
        onClick={onPictureClick}
      />
      <DropdownContainer show={showDropdown ? "show" : "unshow"} />
    </div>
  </div>
);

export default NavBar;
