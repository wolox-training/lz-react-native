import React, { Component } from "react";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import { getBookInfo } from "../../service/books";

class BookDetailContainer extends Component {
  state = {
    author: null,
    title: null,
    genre: null,
    year: null,
    image: defaultImg
  };

  componentDidMount() {
    this.getBook();
  }

  getBook() {
    getBookInfo(this.props.match.params.id, this.selectBook);
  }

  selectBook = response => {
    const book = response.data;
    this.setState({
      author: book.author,
      title: book.title,
      genre: book.genre,
      year: book.year,
      image: book.image_url
    });
  };

  render() {
    return (
      <Book_detail
        author={this.state.author}
        title={this.state.title}
        genre={this.state.genre}
        year={this.state.year}
        image={this.state.image}
      />
    );
  }
}

export default BookDetailContainer;
