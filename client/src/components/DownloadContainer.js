import React from "react";
import downloadIcon from "../img/download-sd.svg";

function DownloadContainer({ error }) {
  return (
    <div className="download">
      <img
        className="download__icon"
        src={downloadIcon}
        alt="inshare-download"
      />
      {error ? (
        <h4>{error.message}😏</h4>
      ) : (
        <>
          <h2>Your file is ready to download</h2>
          <p>Link expires in 24 hours</p>
          <div className="download__meta">
            <h4>fileName</h4>
            <small>fileSize KB</small>
          </div>
          <div className="send-btn-container">
            <a href="#">Download file</a>
          </div>
        </>
      )}
    </div>
  );
}

export default DownloadContainer;
