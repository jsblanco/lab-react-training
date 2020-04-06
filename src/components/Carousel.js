import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  previousImage = () => {
    let indexUpdate = 0;
    if (this.state.index === 0) {
      indexUpdate = this.props.imgs.length - 1;
    } else {
      indexUpdate = this.state.index - 1;
    }
    this.setState({
      index: indexUpdate,
    });
  };

  nextImage = () => {
    let indexUpdate = 0;
    if (this.state.index === this.props.imgs.length - 1) {
      indexUpdate = 0;
    } else {
      indexUpdate = this.state.index + 1;
    }
    this.setState({
      index: indexUpdate,
    });
  };

  render() {
    return (
      <div>
        <h2>Carousel</h2>
        <button onClick={this.previousImage}>Left</button>
        <img src={this.props.imgs[this.state.index]} alt="" />
        <button onClick={this.nextImage}>Right</button>
      </div>
    );
  }
}
