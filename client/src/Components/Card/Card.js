import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Card(props) {
  const data = props.data;

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          maxWidth: "900px",
          margin: "50px",
          borderBottom: "1px solid gray",
          justifyContent:"space-between"
        }}
      >
        <div style={{maxWidth:"600px"}}>
          <div style={{ fontSize: "25px", marginBottom: "10px" }}>
            {data.title}
          </div>
          <div>{data.description}</div>
          <div>{data.content}</div>
          <div style={{ marginTop: "20px" }}>
            By {data.author} on {data.publishedAt}
          </div>
          <a href={data.url}>{data.url}</a>
        </div>

        <div>
          <img style={{ height: "100px" }} src={data.urlToImage} />
        </div>
      </div>
    </React.Fragment>
  );
}
