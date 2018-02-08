import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {
  WBOOKS,
  SELECCIONAR_FILTRO,
  TITULO,
  AUTOR,
  LOGO_SIZE
} from "./strings.js";
import Book from "../../components/Book/index.js";
import Logo from "../../components/Logo";
import wBooks from "../../assets/photos/wBooks.png";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";
import NavBarContainer from "../../components/NavBar";

const Home = ({ data, onSelect, onInput, loading }) => (
  <div className="home_container">
    <NavBarContainer />
    <Logo picture={wBooks} text={WBOOKS} size={LOGO_SIZE} />
    <form>
      <select className="selector" name="select" onChange={onSelect}>
        <option value="null">{SELECCIONAR_FILTRO}</option>
        <option value="title">{TITULO}</option>
        <option value="author">{AUTOR}</option>
      </select>
      <input
        className="search"
        type="text"
        placeholder="Buscar..."
        name="fname"
        onChange={onInput}
      />
    </form>
    {loading ? (
      <ScaleLoader />
    ) : (
      <div className="gallery">
        {data.map(element => (
          <Book
            id={element.id}
            imageUrl={element.image_url}
            title={element.title}
            author={element.author}
          />
        ))}
      </div>
    )}
  </div>
);

export default Home;
