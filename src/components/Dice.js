import React, { Component } from "react";

export default class Dice extends Component {
  state = {
    image: Math.floor(Math.random() * 6),
    clicked: true,
  };
  

  clickHandler = () => {
    this.setState({
      image: "-empty",
    });
    setTimeout(() => {
        this.setState({
            image: Math.floor(Math.random() * 5)+1,
          });
    }, 1000);
  };


  render() {
    return (
      <div>
      <h2>Magic dice!</h2>
        <img style={{width: `300px`}}
          onClick={this.clickHandler}
          src={`/img/dice${this.state.image}.png`}
          alt=""
        />
      </div>
    );
  }
}
