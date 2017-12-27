import React, { Component } from "react";
import defaultImg from "../../assets/photos/default.png";
import Home from "./layout.js";
import { getBookGallery, getBookInfo } from "../../service/books";

class HomeContainer extends Component {
  state = { books: [], gallery: [], searchType: null };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    getBookGallery(this.loadBooks);
  };

  loadBooks = response => {
    this.setState({ books: response.data, gallery: response.data });
  };

  setSearchType = search => {
    const newSearchType = search.target.value;
    this.setState({ searchType: newSearchType });
  };

  filterBooks = filterWord => {
    const data = this.state.books;
    const word = filterWord.nativeEvent.target.value;
    const type = this.state.searchType;
    if (type != "null") {
      this.setState({
        gallery: data.filter(book =>
          book[type].toLowerCase().includes(word.toLowerCase())
        )
      });
    } else {
      this.setState({
        gallery: data.filter(
          book =>
            book.title.toLowerCase().includes(word.toLowerCase()) ||
            book.author.toLowerCase().includes(word.toLowerCase())
        )
      });
    }
  };

  render() {
    return (
      <Home
        data={this.state.gallery}
        onSelect={this.setSearchType}
        onInput={this.filterBooks}
      />
    );
  }
}

export default HomeContainer;
