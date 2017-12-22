import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WBOOKS, SELECCIONAR_FILTRO, TITULO, AUTOR } from "./strings.js";
import Book from "../../components/Book/index.js";
import Logo from "../../components/Logo";
import wBooks from "../../assets/photos/wBooks.png";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";
import NavBar from "../../components/NavBar";

const Home = ({ data, onSelect, onInput }) => (
  <div className="home_container">
    <NavBar />
    <Logo picture={wBooks} text={WBOOKS} />
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
  </div>
);

export default Home;
