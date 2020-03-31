import React, { Component } from "react";
import "./LikeButton.css"

class LikeButton extends Component {
  state = {
    colorArray: ['purple','blue','green','yellow','orange','red'],
    likes: 0,
    backgroundColor: "white",
  };



  addALike = () => {
    const newLikes = this.state.likes + 1;
    this.setState({
        likes: newLikes,
        backgroundColor: (this.state.colorArray[Math.floor(Math.random()*this.state.colorArray.length)])
    });
  };


  
  render() {
    return (
      <button className="like-button" style={{backgroundColor: `${this.state.backgroundColor}`}} onClick={this.addALike}>Likes:  
        {this.state.likes}
      </button>
    );
  }
}

export default LikeButton;
