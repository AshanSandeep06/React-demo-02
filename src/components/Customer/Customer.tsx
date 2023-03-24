import React, { Component } from "react";

type CustomerProps = {
  id: string;
  name: string;
  address: string;
  salary: number;
};

// interface CustomerProperties{
//     id: string,
//     name: string,
//     address: string,
//     salary: number
// }

export default class Customer extends Component<CustomerProps> {
  render() {
    return (
      <div className="h-80 border bg-blue-800 text-white px-20 flex flex-col justify-center items-center gap-5 rounded-2xl">
        <h1>{this.props.id}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.salary}</h1>
      </div>
    );
  }
}
