import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import DownloadContainer from "../components/DownloadContainer";
import axios from 'axios'

const url = 'http://localhost:3001/files/2617430c-2601-4e9a-9b71-10fb02bd3548'

function DownloadScreen() {
  const [state, setstate] = useState({})
  
  useEffect(() => {
    const myfun = async () => {
      const response = await axios.get(url)
      setstate(response.data)
    }
    myfun()
  }, [])

  return (
    <div className="download-screen">
      <img src={logo} alt="logo" className="logo" />
      <DownloadContainer state={state} />
    </div>
  );
}

export default DownloadScreen;
