import React, { Component } from "react";

class TryCatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrored: false
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ isErrored: true });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.isErrored) {
      return (
        <div>
          <p>Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default TryCatch;
