import React from "react";
import file from "../img/file.svg";
export default function UploadForm() {
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
        <input type="file" id="fileInput" />
        <div className="title">
          Drop your files here or, <span id="browseBtn">browse</span>
        </div>
      </div>
    </form>
  );
}
