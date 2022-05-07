import React from "react";
import Footer from "../footer/Footer";
import Midsoap from "./Midsoap";
import "./soap.scss";

export default function Soap() {
  return (
    <div className="soapMain">
      <div className="soapHead">
        <p>
          <a href="google.com">HOME</a> / HAND SOAPS & SANITIZERS
        </p>
      </div>

      <Midsoap />
    </div>
  );
}
