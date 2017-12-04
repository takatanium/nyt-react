import axios from "axios";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const NYTURL = "https://api.nytimes.com/svc/search/v2/"
               + "articlesearch.json?api-key="
               + APIKEY + '&q=';

export default {
  search: function(search='') {
    return axios.get(NYTURL+search);
  },
  getArticles: function() {
    return axios.get("/api/saved");
  },
  getArticle: function(id) {
    return axios.get("/api/saved/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  updateArticle: function(id, articleData) {
    return axios.put("/api/saved/" + id, articleData);
  }
};
