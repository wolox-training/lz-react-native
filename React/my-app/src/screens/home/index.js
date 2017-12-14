import React, { Component } from "react";
import data from "../../config/data.json";
import defaultImg from "../../assets/photos/default.png";
import Home from "./layout.js";

class HomeContainer extends Component {
  state = { books: data, searchType: null };

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

  render() {
    return (
      <Home
        data={this.state.books}
        onSelect={this.setSearchType}
        onInput={this.filterBooks}
      />
    );
  }
}

export default HomeContainer;
