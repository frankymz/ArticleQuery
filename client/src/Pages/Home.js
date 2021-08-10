import React, { useEffect, useState } from "react";
import Service from "../Service";
import Card from "../Components/Card/Card";
import "./Pages.css";


const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
};

export default function Home(props) {
  const [keyword, setKeyword] = useState("bitcoin");
  const [news, setNews] = useState([]);
  const auth = props.auth;
  // variables auth: boolean
  // and user: ''
  
  useEffect(() => {
    handleSubmit();
  }, []);

  function handleSubmit() {
    Service.everythingApiRequest(keyword, "en", "popularity").then(function (
      res
    ) {
      if (res.method === "OPTIONS") {
        return new Response("OK", { headers: corsHeaders });
      }
      setNews(res.data.articles);
    });
  }

  return (
    <React.Fragment>
      
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginTop: "20px" }}>
          <div
            className="fontDif"
            style={{
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              width: "800px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                Popular articles in the United Sates about
              </div>

              <input
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="bitcoin..."
                style={{
                  border: "none",
                  fontSize: "24px",
                }}
                className="input"
              />
            </div>
            <div>
              <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
                Go
              </button>
            </div>
          </div>
          <div>
            {news.map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
