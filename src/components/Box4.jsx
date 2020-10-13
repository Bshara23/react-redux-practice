import React, { Component } from "react";
import { connect } from "react-redux";

class Box4 extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      postId: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
   
    this.props.dispatch({
      type: "ADD_POST2",
      payload: this.state.value,
    });

    this.setState({ postId: this.state.postId + 1 });
  }

  render() {
    console.log("render box4");

    return (
      <div className="App">
        <header className="App-header">
        <h1>Box 4</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          <ul>
          <li>{this.props.posts2}</li>

          </ul>
        </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Box4);
