import React, { useRef } from "react";
import file from "../img/file.svg";

export default function UploadForm() {
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <form>
      <div className="drop-zone">
        <div className="icon-container">
          <img
            src={file}
            draggable="false"
            className="center"
            alt="File Icone"
          />
          <img src={file} draggable="false" className="left" alt="File Icone" />
          <img
            src={file}
            draggable="false"
            className="right"
            alt="File Icone"
          />
        </div>
        <input type="file" id="fileInput" ref={fileInput} />
        <div className="title">
          Drop your files here or,{" "}
          <span id="browseBtn" onClick={() => handleClick()}>
            browse
          </span>
        </div>
      </div>
    </form>
  );
}
