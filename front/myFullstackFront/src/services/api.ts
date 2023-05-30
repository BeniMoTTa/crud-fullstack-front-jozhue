import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});
export const apiImage = axios.create({
  baseURL: `https://api.pexels.com/v1/search?query=landscape&per_page=10&page=`,
});
