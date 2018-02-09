import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import { getBook, resetBookView } from "../../redux/book/actions";
import {
  getBookStatus,
  getWishlist,
  newIntemWishlist
} from "../../redux/rents/actions";

class BookDetailContainer extends Component {
  state = {};

  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
    this.props.dispatch(getBookStatus(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(resetBookView());
  }

  addToWishlist = () => {
    this.props.dispatch(newIntemWishlist(this.props.match.params.id));
  };

  rent = () => {};

  render() {
    return (
      <Book_detail
        book={this.props.bookInfo}
        loading={this.props.loading || this.props.loadingBookStatus}
        bookAvailable={this.props.bookAvailable}
        disabled={this.props.disabled || this.props.processing}
        text={this.props.text}
        onClick={this.props.bookAvailable ? this.rent : this.addToWishlist}
      />
    );
  }
}

const mapStateToProps = store => ({
  bookInfo: store.book.bookInfo,
  loading: store.book.loading,
  bookAvailable: store.rents.bookAvailable,
  text: store.rents.text,
  disabled: store.rents.disabled,
  loadingBookStatus: store.rents.loadingBookStatus,
  processing: store.rents.processing
});

export default connect(mapStateToProps)(BookDetailContainer);
