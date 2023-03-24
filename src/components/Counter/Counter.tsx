import React, { Component } from "react";

type CounterProps = {
  initialValue: number;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(properties: CounterProps) {
    super(properties);

    this.state = {
      count: this.props.initialValue,
    };
  }

  render() {
    return (
      <div className="h-80 border bg-blue-800 text-white px-20 flex flex-col justify-center items-center gap-5 rounded-2xl">
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
