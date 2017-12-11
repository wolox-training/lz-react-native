import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import defaultImg from "./photos/default.png";

class App extends Component {
  state = { books: data, searchType: null };

  render() {
    return (
      <div className="mainContainer">
        <h1 className="main_title"> wBooks </h1>
        <form>
          <select
            className="selector"
            name="select"
            placeholder="Seleccionar filtro"
            onChange={this.setSearchType}
          >
            <option value="Titulo">Titulo</option>
            <option value="Autor">Autor</option>
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
    //    const type = this.state.searchType;
    this.setState({ books: data.filter(book => book.title.includes(word)) });
  };
}

class Book extends Component {
  render() {
    const image = this.props.book.image_url;
    const title = this.props.book.title;
    const author = this.props.book.author;
    return (
      <div className="book_info">
        <img className="cover" src={image ? image : defaultImg} />
        <h1 className="title"> {title}</h1>
        <h1 className="author"> {author}</h1>
      </div>
    );
  }
}

export default App;
