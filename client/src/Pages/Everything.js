import React, { useEffect, useState } from "react";
import Service from "../Service";
import Card from "../Components/Card/Card";

export default function Everything() {
  const [input, setInput] = useState({
    keywords: "",
    language: "",
    sortBy: "",
  });
  const [news, setNews] = useState([]);
  useEffect(() => {
    setInput({ keywords: "", language: "", sortBy: "" });
  }, []);

  function handleSubmit() {
    Service.testAPI().then(function (res) {
      setNews(res.data.articles);
      console.log(res);
    });
  }
  return (
    <React.Fragment>
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginTop: "20px", maxWidth: "500px", width: "100%" }}>
          <div style={{ border: "1px solid", borderRadius: "5px" }}>
            <div
              style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}
            >
              Search Everything
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
                margin: "auto",
              }}
            >
              <div style={{ marginRight: "20px" }}>Enter Keywords:</div>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, keywords: e.target.value })
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
                margin: "auto",
              }}
            >
              <div style={{ marginRight: "20px" }}>Enter Language:</div>
              <select
                onChange={(e) =>
                  setInput({ ...input, language: e.target.value })
                }
              >
                <option value="">Language</option>
                <option value="ar">Arabic</option>
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="he">Hebrew</option>
                <option value="it">Italian</option>
                <option value="nl">Dutch</option>
                <option value="no">Norsk</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="se">Northern Sami</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "320px",
                justifyContent: "space-between",
                padding: "20px",
                margin: "auto",
              }}
            >
              <div style={{ marginRight: "20px" }}>Sort By:</div>
              <select
                onChange={(e) => setInput({ ...input, sortBy: e.target.value })}
              >
                <option value="publishedAt">Newest</option>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <button onClick={handleSubmit}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          margin: "0 auto",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div>
          {news.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
