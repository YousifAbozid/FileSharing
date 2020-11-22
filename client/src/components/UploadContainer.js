import React from "react";
import UploadForm from "./UploadForm";
import ProgressContainer from "./ProgressContainer";
import SharingContainer from "./SharingContainer";

function UploadContainer({ showToast }) {
  return (
    <section className="upload-container">
      <UploadForm showToast={showToast} />
      <ProgressContainer />
      <SharingContainer />
    </section>
  );
}

export default UploadContainer;
