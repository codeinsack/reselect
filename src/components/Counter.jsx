import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/actions/counter';

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button type="button" onClick={onIncrement}>INC</button>
        <button type="button" onClick={onDecrement}>DEC</button>
        <div>{ counter }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
