import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/creators";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>

        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
