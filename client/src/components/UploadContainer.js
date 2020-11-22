import React from "react";
import UploadForm from "./UploadForm";
import ProgressContainer from "./ProgressContainer";
import SharingContainer from "./SharingContainer";
function UploadContainer() {
  return (
    <section className="upload-container">
      <UploadForm />
      <ProgressContainer />
      <SharingContainer />
    </section>
  );
}

export default UploadContainer;
