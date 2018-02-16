import React from "react";
import "./styles.css";
import NavBarContainer from "../../components/NavBar";
import bigProfile from "../../assets/photos/bigProfile.png";
import { HashLoader } from "react-spinners";
import Gallery from "../../components/Gallery";
// import sugerencias from "../../config/sugerencias.json";
import Comment from "../../components/Comment";
import {} from "./strings";

const Profile = ({ rents, wishList, comments, loading }) => (
  <div className="profile_box">
    <NavBarContainer />
    {loading ? (
      <HashLoader />
    ) : (
      <div>
        <div className="user_box">
          <img alt="profile" className="profile_picture" src={bigProfile} />
          <div className="profile_info">
            <h1 className="profile_name"> Hi, Im Becky</h1>
            <h1 className="profile_email"> HiIm@Becky</h1>
          </div>
        </div>
        <hr className="barrier" />
        <h1 className="topic">LEIDOS</h1>
        <Gallery bookList={rents} />
        <h1 className="topic">WISHLIST</h1>
        <Gallery bookList={wishList} />
        <hr className="barrier" />
        <h1 className="topic">COMENTARIOS</h1>
        <div className="comments">
          {comments
            .slice(0, 4)
            .map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
      </div>
    )}
  </div>
);

export default Profile;
