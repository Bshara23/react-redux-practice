import React, { Component } from "react";
import { connect } from "react-redux";

class Box2 extends Component {
  render() {
    //const myObj = JSON.parse(window.localStorage.getItem("A"));
    console.log("render box2");

    return (
      <div className="upperChild">
          <h1>Box 2</h1>
        {this.props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box2);
