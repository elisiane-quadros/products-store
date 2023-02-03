import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  })
};

export default api;