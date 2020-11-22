import React from "react";
import downloadIcon from "../img/download-sd.svg";

const DownloadContainer = ({ state }) => {
  console.log(state)
  return (
    <div className="download">
      <img
        className="download__icon"
        src={downloadIcon}
        alt="inshare-download"
      />
      <h2>Your file is ready to download</h2>
      <p>Link expires in 24 hours</p>
      <div className="download__meta">
      <h4> {state.filename} </h4>
      <small>{state.size / 1000} KB</small>
      </div>
      <div className="send-btn-container">
        <a href={`http://localhost:3001/files/download/${state.uuid}`} >Download file</a>
      </div>
    </div>
  )
}

export default DownloadContainer