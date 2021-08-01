import axios from "axios";

const topAPI = `https://newsapi.org/v2/top-headlines?`;
const everyAPI = `https://newsapi.org/v2/everything?`;

class Service {
  testAPI() {
    return axios.get(everyAPI, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
      },
    });
  }

  topWithKeywords(keywords) {
    return axios.get(topAPI + `q=${keywords}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
      },
    });
  }

  topWithCategory(category) {
    return axios.get(topAPI + `category=${category}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
      },
    });
  }

  topWithCategory(country) {
    return axios.get(topAPI + `country=${country}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
      },
    });
  }

  topWithAll(keywords, category, country) {
    return axios.get(
      topAPI + `q=${keywords}&country=${country}&category=${category}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
  }

  topWithAll(keywords, category, country) {
    return axios.get(
      topAPI + `q=${keywords}&country=${country}&category=${category}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
  }

  topApiRequest(keywords, category, country) {
    let finalAPI =
      topAPI +
      `q=${keywords}` +
      `&category=${category}` +
      `&country=${country}`;

    return axios.get(finalAPI, {
      headers: {
        Authorization: `${process.env.REACT_APP_APIKEY}`,
      },
    });
  }
}

export default new Service();
