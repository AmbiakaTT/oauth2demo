import React, { useState, useEffect } from "react";
import jwy from "../assets/images/JWY.jpg";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CLIENT_ID = "8438155457096955c5eb";
const CLIENT_SECRET = "47257d419a99a0af5c241d5fab66c7a88dfbaea4";

function revealDiv() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Home() {
  const [accessToken, setAccessToken] = useState(null);

  const loginGoogle = () => {
    const authorizationUrl = `http://localhost:8080/oauth2/authorization/google`;

    window.location.href = authorizationUrl;
  };

  return (
    <>
      <body className="bu">
        <img src={jwy} className="Jwy" alt="Jang Won Young" />{" "}
        <div className="startRegion">
          <p className="message1"> Single-Sign on using OAuth2</p>
          <p className="message2">
            Rediretion and store user details on cookie
          </p>
          <button
            className="startbutton"
            type="button"
            id="google-login-button"
            onClick={loginGoogle}
          >
            Login with Google
          </button>
        </div>
      </body>
    </>
  );
}

export default Home;
