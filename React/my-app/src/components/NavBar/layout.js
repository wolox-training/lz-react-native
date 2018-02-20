import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import wBooks from "../../assets/photos/wBooks.png";
import newBook from "../../assets/photos/newBook.png";
import notificationBell from "../../assets/photos/notificationBell.png";
import { WBOOKS, LOGO_SIZE } from "./strings";
import Logo from "../Logo";
import DropdownContainer from "../Dropdown";
import Notification from "../Notification";
import defaultAvatar from "../../assets/photos/default-avatar.png";
import NewBook from "../NewBook";

const NavBar = ({
  onPictureClick,
  showDropdown,
  showNotification,
  onNotificationClick,
  loggedProfile,
  notification,
  onReadClick,
  showModal,
  newBookClick
}) => (
  <div className="nav_box">
    <div className="logo_box">
      <Link to="/">
        <Logo picture={wBooks} text={WBOOKS} size={LOGO_SIZE} />
      </Link>
    </div>
    <div className="images_box">
      <img
        alt="Notification bell"
        className="nav_image"
        src={notificationBell}
        onClick={onNotificationClick}
      />
      <Notification
        notification={notification}
        markAsRead={onReadClick}
        show={showNotification ? "show" : "unshow"}
      />
      <img alt="" className="nav_image" src={newBook} onClick={newBookClick} />
      <img
        alt="profile"
        className="nav_image"
        src={loggedProfile.image_url || defaultAvatar}
        onClick={onPictureClick}
      />
      <NewBook isOpen={showModal} />
      <DropdownContainer show={showDropdown ? "show" : "unshow"} />
    </div>
  </div>
);

export default NavBar;
