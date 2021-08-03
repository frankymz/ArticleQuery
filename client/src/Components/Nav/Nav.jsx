import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Nav() {
  return (
    <React.Fragment>
      <div
        className="font"
        style={{
          margin: "auto",
          justifyContent: "center",
          display: "flex",
          maxWidth: "900px",
          cursor: "default",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              maxWidth: "1000px",
              width: "100%",
              marginBottom: "50px",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "30px" }}>Article Query</div>
            <div>
              <a href="http://localhost:5000/login">
                <button>Login</button>
              </a>
              <a href="http://localhost:5000/logout">
                <button>Logout</button>
              </a>
            </div>
          </div>
          <div style={{ fontSize: "20px" }}>
            Search for the top headlines anywhere in the world
          </div>
          <div
            style={{
              border: "1px solid gray",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                to="/topheadlines"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                Top Headlines
              </Link>
              <Link
                to="/everything"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Everything{" "}
              </Link>
            </div>

            <div>Profile</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
