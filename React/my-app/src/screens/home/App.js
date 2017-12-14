import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import defaultImg from "./photos/default.png";
import { WBOOKS, SELECCIONAR_FILTRO, TITULO, AUTOR } from "./strings.js";

class App extends Component {
  state = { books: data, searchType: null };

  render() {
    return (
      <div className="mainContainer">
        <h1 className="main_title">{WBOOKS} </h1>
        <form>
          <select
            className="selector"
            name="select"
            onChange={this.setSearchType}
          >
            <option value="null">{SELECCIONAR_FILTRO}</option>
            <option value="title">{TITULO}</option>
            <option value="author">{AUTOR}</option>
          </select>
          <input
            className="search"
            type="text"
            placeholder="Buscar..."
            name="fname"
            onChange={this.filterBooks}
          />
        </form>
        <div className="gallery">
          {this.state.books.map(element => <Book book={element} />)}
        </div>
      </div>
    );
  }

  setSearchType = search => {
    const newSearchType = search.target.value;
    this.setState({ searchType: newSearchType });
  };

  filterBooks = filterWord => {
    const word = filterWord.nativeEvent.target.value;
    const type = this.state.searchType;
    if (type != "null") {
      this.setState({
        books: data.filter(book =>
          book[type].toLowerCase().includes(word.toLowerCase())
        )
      });
    } else {
      this.setState({
        books: data.filter(
          book =>
            book.title.toLowerCase().includes(word.toLowerCase()) ||
            book.author.toLowerCase().includes(word.toLowerCase())
        )
      });
    }
  };
}

class Book extends Component {
  render() {
    const { image_url, title, author } = this.props.book;
    return (
      <div className="book_info">
        <img className="cover" src={image_url ? image_url : defaultImg} />
        <h1 className="title"> {title}</h1>
        <h1 className="author"> {author}</h1>
      </div>
    );
  }
}

export default App;
