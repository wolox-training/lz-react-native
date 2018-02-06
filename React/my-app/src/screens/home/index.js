import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/default.png";
import Home from "./layout.js";
import {
  getBookList,
  getFilterGallery,
  resetGalleryView
} from "../../redux/book/actions";

class HomeContainer extends Component {
  state = { gallery: [], searchType: null };

  componentWillMount() {
    this.props.dispatch(getBookList());
  }

  componentWillUnmount() {
    this.props.dispatch(resetGalleryView());
  }

  setSearchType = search => {
    const newSearchType = search.target.value;
    this.setState({ searchType: newSearchType });
  };

  filterBooks = filterWord => {
    this.props.dispatch(
      getFilterGallery(
        this.props.bookList,
        filterWord.nativeEvent.target.value,
        this.state.searchType
      )
    );
  };

  render() {
    return (
      <Home
        data={this.props.gallery}
        onSelect={this.setSearchType}
        onInput={this.filterBooks}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = store => ({
  bookList: store.book.bookList,
  gallery: store.book.gallery,
  loading: store.book.loadingGallery
});

export default connect(mapStateToProps)(HomeContainer);
