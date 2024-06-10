import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v",
  // baseURL: import.meta.env.VITE.BACKEND.URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
  },
});
