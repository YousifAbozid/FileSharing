import React from "react";
import copyFile from "../img/copy-icon.svg";

function SharingContainer() {
  return (
    <div className="sharing-container">
      <p className="expire">Link expires in 24 hrs</p>

      <div className="input-container">
        <input type="text" id="fileURL" readOnly />
        <img src={copyFile} id="copyURLBtn" alt="copy to clipboard icon" />
      </div>

      <p className="email-info">Or Send via Email</p>
      <div className="email-container">
        <form id="emailForm">
          <div className="filed">
            <label htmlFor="fromEmail">Your email</label>
            <input
              type="email"
              autoComplete="email"
              required
              name="from-email"
              id="fromEmail"
            />
          </div>

          <div className="filed">
            <label htmlFor="toEmail">Receiver's email</label>
            <input
              type="email"
              required
              autoComplete="receiver"
              name="to-email"
              id="toEmail"
            />
          </div>
          <div className="send-btn-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SharingContainer;
