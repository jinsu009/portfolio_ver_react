import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Main.css";
import Home from "../../Home";
import DetailProject from "../content/project/DetailProject";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main_container">
      <div>
        <h2
          onClick={() => {
            navigate(`/`);
          }}
        >
          Jin profile
        </h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/projectdetail/:id" element={<DetailProject />} />
      </Routes>
    </div>
  );
};

export default Main;
