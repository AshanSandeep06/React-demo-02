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

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="h-80 border bg-blue-800 text-white px-20 flex flex-col justify-center items-center gap-5 rounded-2xl">
        <h1>{this.state.count}</h1>

        <section className="flex gap-6">
          <button
            className="text-4xl border-2 w-12 h-12 rounded-lg"
            onClick={this.increaseCount}
          >
            +
          </button>

          <button
            className="text-4xl border-2 w-12 h-12 rounded-lg"
            onClick={this.decreaseCount}
          >
            -
          </button>
        </section>
      </div>
    );
  }
}
