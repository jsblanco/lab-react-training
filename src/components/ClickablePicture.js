import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    let image;

    if (this.state.clicked === true) {
      image = this.props.imgClicked;
    } else {
      image = this.props.img;
    }

    return (
      <div>
        <img onClick={this.clickHandler} src={image} alt="" />
      </div>
    );
  }
}
