import React from "react";
import "./styles.css";
import NavBarContainer from "../../components/NavBar";
import { HashLoader } from "react-spinners";
import defaultAvatar from "../../assets/photos/default-avatar.png";
import Gallery from "../../components/Gallery";
import Comment from "../../components/Comment";
import { LEIDOS, WISHLIST, COMENTARIOS } from "./strings";

const Profile = ({ rents, wishList, comments, loading, profile }) => (
  <div className="profile_box">
    <NavBarContainer />
    {loading ? (
      <HashLoader />
    ) : (
      <div>
        <div className="user_box">
          <img
            alt="profile"
            className="profile_picture"
            src={profile.image_url || defaultAvatar}
          />
          <div className="profile_info">
            <h1 className="profile_name">{`${profile.first_name} ${
              profile.last_name
            }`}</h1>
            <h1 className="profile_email"> {profile.email} </h1>
            <div className="amount_box">
              <h1 className="amounts">{`${rents.length} leidos`}</h1>
              <hr className="amounts" />
              <h1 className="amounts">{`${comments.length} comentados`}</h1>
            </div>
          </div>
        </div>
        <hr className="barrier" />
        <h1 className="topic">{LEIDOS}</h1>
        <Gallery bookList={rents} />
        <h1 className="topic">{WISHLIST}</h1>
        <Gallery bookList={wishList} />
        <hr className="barrier" />
        <h1 className="topic">{COMENTARIOS}</h1>
        <div className="comments">
          {comments
            .slice(0, 4)
            .map(comment => (
              <Comment key={comment.id} comment={comment} link={true} />
            ))}
        </div>
      </div>
    )}
  </div>
);

export default Profile;
