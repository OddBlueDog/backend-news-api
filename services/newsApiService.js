var axios = require('axios');

var newsApiKey = process.env.NEWS_API_KEY;
var axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: { 'X-Api-Key': newsApiKey },
});

module.exports.getMany = (q) => {
  // If there is a search string then use this for the query
  if (q) {
    return axiosInstance.get(
      `/everything?sortBy=publishedAt&sources=google-news,reuters,bbc-news,independent&q=${q}`
    );
  }
  return axiosInstance.get(
    '/everything?sortBy=publishedAt&sources=google-news,reuters,bbc-news,independent'
  );
};
