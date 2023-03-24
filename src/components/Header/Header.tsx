import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const activeLink = "border-b-2";
const normalLink = "";

export default class Header extends Component {
  render(): React.ReactNode {
    return (
      <section className="bg-blue-900 h-20 p-2.5 text-white fixed top-0 w-full">
        <div className="h-full flex">
          <section className="w-1/2 flex items-center">
            <h1 className="pl-3 text-3xl">LOGO</h1>
          </section>

          <section className="w-1/2 flex items-center justify-around text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/About"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact
            </NavLink>
            <NavLink
              to={"/Profile"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              My Profile
            </NavLink>
          </section>
        </div>
      </section>
    );
  }
}
