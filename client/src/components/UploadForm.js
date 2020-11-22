import React, { useRef, useState } from "react";
import file from "../img/file.svg";

export default function UploadForm({ showToast }) {
  const [dragged, setDragged] = useState(false);
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragged(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragged(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files.length === 1) {
      fileInput.current.files = files;
      console.log(files);
    } else {
      showToast("You can't upload multiple files");
    }
    setDragged(false);
  };

  return (
    <form>
      <div
        className={dragged ? "drop-zone dragged" : "drop-zone"}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
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
