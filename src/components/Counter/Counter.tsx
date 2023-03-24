import React, { Component } from 'react'

type CounterProps = {
    initialValue: number;
};

type CounterState = {
    count: number;
};

export default class Counter extends Component {
  render() {
    return (
      <div>Counter</div>
    )
  }
}
