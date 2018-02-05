import React, { Component } from "react";
import { connect } from "react-redux";

import defaultImg from "../../assets/photos/default.png";
import Home from "./layout.js";
import { getBookGallery, getBookInfo } from "../../service/books";
import { getBooks } from "../../redux/book/actions";

class HomeContainer extends Component {
  state = { gallery: [], searchType: null };

  componentWillMount() {
    this.props.dispatch(getBooks());
  }

  componentWillReceiveProps(newProps) {
    debugger;
    this.setState({
      gallery: newProps.bookList
    });
  }

  setSearchType = search => {
    const newSearchType = search.target.value;
    this.setState({ searchType: newSearchType });
  };

  filterBooks = filterWord => {
    const data = this.props.bookList;
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

const mapStateToProps = store => ({
  bookList: store.book.bookList
});

export default connect(mapStateToProps)(HomeContainer);
