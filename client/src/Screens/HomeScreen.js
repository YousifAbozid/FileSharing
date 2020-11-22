import React, { useRef, useState } from "react";
import logo from "../img/logo.png";
import UploadContainer from "../components/UploadContainer";

function HomeScreen() {
  const [show, setShow] = useState(false); //show toast

  const toast = useRef(null);
  let toastTimer;
  const showToast = (message) => {
    clearTimeout(toastTimer);
    toast.current.innerText = message;
    setShow(true);
    toastTimer = setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <div className="home-screen">
      <img src={logo} alt="logo" className="logo" />
      <UploadContainer showToast={showToast} />
      <div className="image-vector"></div>
      <div className={show ? "toast show" : "toast"} ref={toast}></div>
    </div>
  );
}

export default HomeScreen;
