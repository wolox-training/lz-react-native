import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import { getBook, resetBookView } from "../../redux/book/actions";
import { bookAvailable, userHasTheBook } from "../../utils/arrayUtils";
import {
  getBookStatus,
  getWishlist,
  newIntemWishlist,
  loading
} from "../../redux/rents/actions";
import { NOTHING, NO_SE_ENCUENTRA, DEVOLVER_ANTES } from "./strings";

class BookDetailContainer extends Component {
  state = { bookAvailable: false, disabled: false, text: NOTHING };

  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
    this.props.dispatch(getBookStatus(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(resetBookView());
  }

  componentWillReceiveProps(newProps) {
    if (bookAvailable(newProps.bookStatus)) {
      this.setState({
        bookAvailable: true,
        disabled: false,
        text: NOTHING
      });
    } else {
      if (userHasTheBook(newProps.bookStatus)) {
        this.setState({
          bookAvailable: false,
          disabled: true,
          text: DEVOLVER_ANTES
        });
      } else {
        this.setState({
          bookAvailable: false,
          disabled: false,
          text: NO_SE_ENCUENTRA
        });
      }
    }
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
        bookAvailable={this.state.bookAvailable}
        disabled={this.state.disabled || this.props.processing}
        text={this.state.text}
        onClick={this.state.bookAvailable ? this.rent : this.addToWishlist}
      />
    );
  }
}

const mapStateToProps = store => ({
  bookStatus: store.rents.bookStatus,
  bookInfo: store.book.bookInfo,
  loading: store.book.loading,
  loadingBookStatus: store.rents.loadingBookStatus,
  processing: store.rents.processing
});

export default connect(mapStateToProps)(BookDetailContainer);
