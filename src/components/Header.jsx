import React from "react";
import Earth from "../assets/earth.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <img className="earth-logo" src={Earth} alt="" />
        <span>My Travel Journal</span>
      </div>
    </>
  );
}
