import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {
        className: "",
      };
    }
  
    handleClick() {
    if (this.state.className === "active"){
        this.setState((prevState) => ({
        className: "",
        }));} else {
        this.setState((prevState) => ({
            className: "active",
            }));
        }
    }
  
    render() {
      return (
          <button
            onClick={() => this.handleClick()}
            className={this.state.className}
          >
            Add Class
          </button>
      );
    }
  }

export default Button;