import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export const predictRainfall = async (data) => {
  const response = await API.post("/predict", data);
  return response.data;
};