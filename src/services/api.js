import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAllProducts = async (url) => {
  const response = await http.get(url);
  const data = response;
  return data;
};

export const getProductById = async (url, id) => {
  const response = await http.get(`${url}/${id}`).then((res) => res.data);
  return response;
};
