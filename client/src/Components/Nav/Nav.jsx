import React from "react";

export default function Nav() {
  return (
    <React.Fragment>
      <div
        style={{
          margin: "auto",
          justifyContent: "center",
          display: "flex",
          maxWidth: "900px",
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
              <button>Login</button>
            </div>
          </div>
          <div style={{ fontSize: "20px" }}>Search for the top headlines in the world</div>
          <div
            style={{
              border: "1px solid gray",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Query</div>

            <div>Profile</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
