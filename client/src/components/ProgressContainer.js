import React from "react";

function ProgressContainer() {
  return (
    <div className="progress-container">
      <div className="bg-progress"></div>

      <div className="inner-container">
        <div className="status">Uploading...</div>
        <div className="percent-container">
          <span className="percentage" id="progressPercent">
            0
          </span>
          %
        </div>

        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default ProgressContainer;
