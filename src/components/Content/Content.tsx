import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Counter from "../Counter";
import Customer from "../Customer";

export default class Content extends Component {
  render() {
    return (
      // Fragement wenuwata
      // <Fragment></Fragment> ---> <> </>
      <>
        <div className="flex justify-center items-center h-screen">
          {/* <Customer
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

          <Counter {...{ initialValue: 3 }} /> */}

          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/About" element={<About />}></Route>

            <Route path="/Contact" element={<Contact />}></Route>

            <Route path="Profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}
