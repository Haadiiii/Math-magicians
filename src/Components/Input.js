import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="input">
          {this.props.children}
        </div>
      </div>
    );
  }
}
