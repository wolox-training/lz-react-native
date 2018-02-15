import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/bigDefault.png";
import Book_detail from "./layout.js";
import {
  getBook,
  resetBookView,
  createNewComment
} from "../../redux/book/actions";
import { bookAvailable, userHasTheBook } from "../../utils/arrayUtils";
import { validateCommentSize, notEmpty } from "../../utils/validations";
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

  bookStatus() {
    if (this.bookAvailable(this.props.bookStatus)) {
      return {
        bookAvailable: true,
        disabled: false,
        text: NOTHING
      };
    } else {
      if (this.userHasTheBook(this.props.bookStatus)) {
        return {
          bookAvailable: false,
          disabled: true,
          text: DEVOLVER_ANTES
        };
      } else {
        return {
          bookAvailable: false,
          disabled: false,
          text: NO_SE_ENCUENTRA
        };
      }
    }
  }

  newComment = event => {
    event.preventDefault();
    this.props.dispatch(
      createNewComment({
        book_id: this.props.match.params.id,
        user_id: window.localStorage.userId,
        content: event.target.comment.value
      })
    );
    // }

    console.log(event.target.comment.value);
  };

  addToWishlist = () => {
    this.props.dispatch(newIntemWishlist(this.props.match.params.id));
  };

  bookAvailable = books => {
    return books.every(book => book.returned_at);
  };

  userHasTheBook = books => {
    return books.some(book => book.user.id === window.localStorage.userId);
  };

  rent = () => {};

  render() {
    const bookStatus = this.bookStatus();
    return (
      <Book_detail
        book={this.props.bookInfo}
        loading={this.props.loading || this.props.loadingBookStatus}
        onClick={this.state.bookAvailable ? this.rent : this.addToWishlist}
        onSubmit={this.newComment}
        comments={this.props.comments}
        disabled={bookStatus.disabled || this.props.processing}
        bookAvailable={bookStatus.bookAvailable}
        text={bookStatus.text}
      />
    );
  }
}

const mapStateToProps = store => ({
  bookStatus: store.rents.bookStatus,
  bookInfo: store.book.bookInfo,
  comments: store.book.commentList,
  loading: store.book.loading,
  loadingBookStatus: store.rents.loadingBookStatus,
  processing: store.rents.processing,
  uploadingComment: store.book.processing
});

export default connect(mapStateToProps)(BookDetailContainer);
