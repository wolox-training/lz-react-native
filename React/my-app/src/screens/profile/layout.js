import React, { Component } from "react";
import "./styles.css";
import wBooks from "../../assets/photos/wBooks.png";
import Input from "../../components/Input";
import ErrorMsg from "../../components/ErrorMsg";
import NavBarContainer from "../../components/NavBar";
import { Link } from "react-router-dom";
import {} from "./strings";

const Profile = ({ onSubmit, emailError, passwordError }) => (
  <div className="login_box">
    <NavBarContainer />
    <h1>Hello!! I'm Profile</h1>
  </div>
);

export default Profile;
