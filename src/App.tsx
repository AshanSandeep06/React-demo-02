import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section className="bg-blue-900 h-20 p-2.5 text-white fixed w-full">
      <div className="h-full flex">
        <section className="w-1/2 flex items-center">
          <h1 className="pl-3 text-3xl">LOGO</h1>
        </section>

        <section className="w-1/2 flex items-center justify-around text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">My Profile</a>
        </section>
      </div>
    </section>
  );
}

export default App;
