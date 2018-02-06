import React, { Component } from "react";
import { connect } from "react-redux";
import defaultImg from "../../assets/photos/default.png";
import Home from "./layout.js";
import { getBookList, getFilterGallery } from "../../redux/book/actions";

class HomeContainer extends Component {
  state = { gallery: [], searchType: null };

  componentWillMount() {
    this.props.dispatch(getBookList());
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      gallery: newProps.bookList
    });
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

    // const data = this.props.bookList;
    // const word = filterWord.nativeEvent.target.value;
    // const type = this.state.searchType;
    //
    // if (type != "null") {
    //   this.setState({
    //     gallery: data.filter(book =>
    //       book[type].toLowerCase().includes(word.toLowerCase())
    //     )
    //   });
    // } else {
    //   this.setState({
    //     gallery: data.filter(
    //       book =>
    //         book.title.toLowerCase().includes(word.toLowerCase()) ||
    //         book.author.toLowerCase().includes(word.toLowerCase())
    //     )
    //   });
    // }
  };

  render() {
    return (
      <Home
        data={this.props.gallery}
        onSelect={this.setSearchType}
        onInput={this.filterBooks}
      />
    );
  }
}

const mapStateToProps = store => ({
  bookList: store.book.bookList,
  gallery: store.book.gallery
});

export default connect(mapStateToProps)(HomeContainer);
