import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WBOOKS, SELECCIONAR_FILTRO, TITULO, AUTOR } from "./strings.js";
import Book from "../../components/Book/index.js";
import "./styles.css";
import defaultImg from "../../assets/photos/default.png";

const Home = ({ data, onSelect, onInput }) => (
  <div className="mainContainer">
    <h1 className="main_title">{WBOOKS} </h1>
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
          imageUrl={element.image_url || defaultImg}
          title={element.title}
          author={element.author}
        />
      ))}
    </div>
  </div>
);

export default Home;
