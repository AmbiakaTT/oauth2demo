import { Outlet } from "react-router-dom";
import "../assets/styles/Root.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="Root">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          />
        </head>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <main className="mainn">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
