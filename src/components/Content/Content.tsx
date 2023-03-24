import React, { Component, Fragment } from "react";
import Customer from "../Customer";

export default class Content extends Component {
  render() {
    return (
      // Fragement wenuwata
      // <Fragment></Fragment> ---> <> </>
      <>
        <div className="flex justify-center items-center h-screen">
          <Customer
            {...{
              id: "C001",
              name: "Bimal",
              address: "Galle",
              salary: 25000.0,
            }}
          />
          <Customer
            {...{
              id: "C001",
              name: "Ruwan",
              address: "Jaffna",
              salary: 25000.0,
            }}
          />
        </div>
      </>
    );
  }
}
