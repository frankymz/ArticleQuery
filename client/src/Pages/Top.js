import React, { useEffect, useState } from "react";
import Service from "../Service";
import Card from "../Components/Card/Card";

export default function Top() {
  const [input, setInput] = useState({
    keywords: " ",
    category: " ",
    country: " ",
  });

  const [news, setNews] = useState([]);

  function handleSubmit() {
    console.log(input)
    Service.topApiRequest(input.keywords, input.category, input.country).then(
      function (res) {
        setNews(res.data.articles);
        console.log(res);
      }
    );
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
              Search Top Headlines
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
                placeholder="Tesla..."
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
              <div style={{ marginRight: "20px" }}>Enter Category:</div>
              <select
                onChange={(e) =>
                  setInput({ ...input, category: e.target.value })
                }
              >
                <option value=" ">Category</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="general">general</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
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
              <div style={{ marginRight: "20px" }}>Enter Country:</div>
              <select
                onChange={(e) =>
                  setInput({ ...input, country: e.target.value })
                }
              >
                <option value=" ">Country</option>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca"> Canada</option>
                <option value="ch"> Switzerland</option>
                <option value="cn"> China</option>
                <option value="co"> Colombia</option>
                <option value="cu">Cuba</option>
                <option value="ca"> Czechia</option>
                <option value="de">Germany</option>
                <option value="eg"> Egypt</option>
                <option value="fr"> France</option>
                <option value="gb"> United Kingdom</option>
                <option value="gr"> Greece</option>
                <option value="hk"> Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie"> Ireland</option>
                <option value="il"> Israel</option>
                <option value="in"> India</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="kr">Korea Republic</option>
                <option value="lt">Lithuania</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>

                <option value="nz">New Zealand</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russia</option>
                <option value="sa">Saudi Arabia</option>
                <option value="se">Sweden</option>
                <option value="sg">Singapore</option>
                <option value="si">Slovenia</option>
                <option value="sk">Slovakia</option>
                <option value="th">Thailand</option>
                <option value="tr">Turkey</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States</option>
                <option value="ve">Venezuela</option>
                <option value="za">South Africa</option>
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
