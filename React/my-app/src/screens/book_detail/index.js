import React, { Component } from "react";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import data from "../../config/data.json";

class BookDetailContainer extends Component {
  state = {
    author: null,
    title: null,
    genre: null,
    year: null,
    image: defaultImg
  };

  componentDidMount() {
    this.selectBook();
  }

  selectBook() {
    const book = data.find(this.sameBook);
    this.setState({
      author: book.author,
      title: book.title,
      genre: book.genre,
      year: book.year
    });
    if (book.image_url) {
      this.setState({ image: book.image_url });
    }
  }

  sameBook = element => {
    return element.id === parseInt(this.props.match.params.id);
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
