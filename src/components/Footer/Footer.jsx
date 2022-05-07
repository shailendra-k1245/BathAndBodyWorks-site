import React from "react";
import Mail from "./Mail";
import "./footer.scss";
import { account, customer, discover, find } from "./data";

import Bottom from "./Bottom";
import Mid from "./Mid";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upSide"></div>

      <div className="line"></div>

      <div className="container">
        <div className="top">
          <Mail />

          <div className="topLinks">
            <div>
              <p>CUSTOMER CARE</p>
              <ul>
                {customer.map((d) => {
                  return (
                    <a href="google.com">
                      <li>{d.link}</li>
                    </a>
                  );
                })}
              </ul>
            </div>

            <div>
              <p>MY ACCOUNT</p>
              <ul>
                {account.map((d) => {
                  return (
                    <a href="google.com">
                      <li>{d.link}</li>
                    </a>
                  );
                })}
              </ul>
            </div>

            <div>
              <p>DISCOVER</p>
              <ul>
                {discover.map((d) => {
                  return (
                    <a href="google.com">
                      <li>{d.link}</li>
                    </a>
                  );
                })}
              </ul>
            </div>

            <div>
              <p>FIND US</p>
              <ul>
                {find.map((d) => {
                  return (
                    <a href="google.com">
                      <li>{d.link}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <Mid />

        <Bottom />
      </div>
    </div>
  );
}
