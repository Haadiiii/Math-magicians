import React, { Component } from "react";

export default class Calculator extends Component {
  render() {
    return (
      <div className="button">
        <button type="submit">{this.props.name}</button>
      </div>
    );
  }
}
