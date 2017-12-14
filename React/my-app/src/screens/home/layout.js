import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WBOOKS, SELECCIONAR_FILTRO, TITULO, AUTOR } from "./strings.js";
import Book from "../../components/Book/index.js";
import "./styles.css";

const Home = ({ data, onSelect, onInput }) => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book</Link>
          </li>
        </ul>
      </nav>
    </header>
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
            key={element.id}
            imageUrl={element.image_url}
            title={element.title}
            author={element.author}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
