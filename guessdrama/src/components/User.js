import React, { useEffect, useState, useRef } from "react";

import "../assets/styles/User.css";
import QRCode from "react-qr-code";

import axios from "axios";

const User = () => {
  // State to store extracted cookie values
  const [userDetails, setUserDetails] = useState({
    email: "",
    pictureUrl: "",
    name: "",
  });

  const [inputString, setInputString] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleSubmitQRCode = () => {
    setShowQRCode(true);
  };

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  useEffect(() => {
    const email = getCookie("email");
    const pictureUrl = getCookie("pictureUrl");
    const name = getCookie("name");

    setUserDetails({
      email: email || "N/A",
      pictureUrl: pictureUrl || "N/A",
      name: name || "N/A",
    });
  }, []);

  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";").map((cookie) => cookie.trim());

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");

      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null;
  }

  const canvasRef = useRef(null);

  return (
    <body>
      <div className="userdetails">
        <p className="name"> Welcome {userDetails.name} </p>
        <p className="email">Email: {userDetails.email}</p>
        <img
          className="userpfp"
          src={userDetails.pictureUrl}
          alt="User Picture"
        />
      </div>
      <div className="qrCodee">
        <div className="inputField">
          <label htmlFor="inputString"></label>
          <input
            type="text"
            id="inputString"
            className="inputBox"
            name="inputString"
            value={inputString}
            onChange={handleInputChange}
            placeholder="Enter a string to generate QR"
            required
          />
          <button className="generateQR" onClick={handleSubmitQRCode}>
            Generate QR Code
          </button>
        </div>
        {showQRCode && (
          <QRCode className="QR" value={inputString} canvasRef={canvasRef} />
        )}
        {/* {showQRCode && (
          <button className="saveImg" onClick={handleSaveClick}>
            Save image
          </button>
        )} */}
      </div>
    </body>
  );
};

export default User;
