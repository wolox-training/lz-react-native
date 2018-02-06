import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import { getBook, loadBook, resetBookView } from "../../redux/book/actions";

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

  componentWillUnmount() {
    this.props.dispatch(resetBookView());
  }

  render() {
    return (
      <Book_detail book={this.props.bookInfo} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = store => ({
  bookInfo: store.book.bookInfo,
  loading: store.book.loading
});

export default connect(mapStateToProps)(BookDetailContainer);
