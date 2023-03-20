import React, { Component, Fragment } from "react";

export default class Content extends Component {
  render() {
    return (
      // Fragement wenuwata
      // <Fragment></Fragment> ---> <> </>
      <>
        <div className="flex justify-center items-center">
          <h1>Content</h1>
        </div>

        <div>
          <h1>Content</h1>
        </div>
      </>
    );
  }
}
