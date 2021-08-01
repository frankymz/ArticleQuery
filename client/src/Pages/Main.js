import React, { useEffect, useState } from "react";
import Service from "../Service";

export default function Main() {
  const [input, setInput] = useState({
    keywords: "",
    category: "",
    country: "",
  });

  function test() {
    Service.testAPI().then(function (res) {
      console.log(res);
    });
  }
  return (
    <React.Fragment>
      <button onClick={test}>ex</button>
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginTop: "20px", maxWidth: "500px", width: "100%" }}>
          <div style={{ border: "1px solid", borderRadius: "5px" }}>
            <div
              style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}
            >
              Query tool
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <div style={{ marginRight: "20px" }}>Enter Keywords:</div>
              <input type="text" />
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <div style={{ marginRight: "20px" }}>Enter Category</div>
              <input type="text" />
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <div style={{ marginRight: "20px" }}>Enter Country:</div>
              <input type="text" onChange={}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
