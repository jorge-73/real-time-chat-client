import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://real-time-chat-server-f8vo.onrender.com/api",
  withCredentials: true,
});

export default instance;
