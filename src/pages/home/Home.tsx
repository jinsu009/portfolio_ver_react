import React from "react";
import "./Home.css";

export const Home = () => {
  window.addEventListener("scroll", function () {
    console.log("hi");
  });

  return <div className="home_div">Home</div>;
};
