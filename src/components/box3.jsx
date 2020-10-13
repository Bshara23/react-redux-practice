import React, { Component } from "react";
import { connect } from "react-redux";

class Box3 extends Component {
  render() {
      console.log("render box3");
    return (
      <div className="upperChild">
        <h1>Box 3</h1>
        
          <li>{this.props.posts2}</li>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts2: state.posts2 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box3);
