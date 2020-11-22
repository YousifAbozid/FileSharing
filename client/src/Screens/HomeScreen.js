import React from "react";
import logo from "../img/logo.png";
import UploadContainer from "../components/UploadContainer";

function HomeScreen() {
  return (
    <div className="home-screen">
      <img src={logo} alt="logo" className="logo" />
      <UploadContainer />
      <div className="image-vector"></div>
      <div className="toast"></div>
    </div>
  );
}

export default HomeScreen;
