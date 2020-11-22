import React from "react";
import logo from "../img/logo.png";
import DownloadContainer from "../components/DownloadContainer";

function DownloadScreen() {
  return (
    <div className="download-screen">
      <img src={logo} alt="logo" className="logo" />
      <DownloadContainer />
    </div>
  );
}

export default DownloadScreen;
