import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import defaultImg from "./photos/default.png";

class App extends Component {
  render() {
    let images = data.map(dt => dt.image_url);

    return (
      <div className="mainContainer">
        <h1 className="title"> shut up!!! </h1>
        <img src={images[1] ? images[3] : defaultImg} />
      </div>
    );
  }
}

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.img} />;
  }
}
Image.defaultProps = { img: defaultImg };

export default App;
