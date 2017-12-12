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
            onChange={this.setSearchType}
          >
            <option value="null">Seleccionar filtro</option>
            <option value="title">Titulo</option>
            <option value="author">Autor</option>
          </select>
          {/* <img className="arrow" src="./photos/arrow.png" /> */}
          <input
            className="search"
            type="text"
            placeholder="Buscar..."
            name="fname"
            onChange={this.filterBooks}
          />
          {/* <img className="square" src="./photos/green_square.png" /> */}
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
