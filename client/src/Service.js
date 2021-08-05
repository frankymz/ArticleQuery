import axios from "axios";

const topAPI = `https://newsapi.org/v2/top-headlines?`;
const everyAPI = `https://newsapi.org/v2/everything?`;

class Service {
  topApiRequest(keywords, category, country) {
    let finalAPI =
      topAPI +
      `q=${keywords}` +
      `&category=${category}` +
      `&country=${country}`;

    return axios.get(finalAPI, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      },
    });
  }

  everythingApiRequest(keywords, language, sortBy) {
    let finalAPI =
      everyAPI +
      `q=${keywords}` +
      `&language=${language}` +
      `&sortBy=${sortBy}`;
    return axios.get(finalAPI, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      },
    });
  }
}

export default new Service();
