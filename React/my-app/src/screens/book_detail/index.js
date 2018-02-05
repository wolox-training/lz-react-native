import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import { getBook } from "../../redux/book/actions";

class BookDetailContainer extends Component {
  state = {
    author: null,
    title: null,
    genre: null,
    year: null,
    image: defaultImg
  };

  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      author: newProps.bookInfo.author,
      title: newProps.bookInfo.title,
      genre: newProps.bookInfo.genre,
      year: newProps.bookInfo.year,
      image: newProps.bookInfo.image_url
    });
  }

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

const mapStateToProps = store => ({
  bookInfo: store.book.bookInfo
});

export default connect(mapStateToProps)(BookDetailContainer);
