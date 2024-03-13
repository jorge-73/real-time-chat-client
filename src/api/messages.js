import axios from "./axios";

export const getMessageRequest = async (id) => axios.get(`/messages/${id}`);
export const sendMessageRequest = async (message, id) =>
  axios.post(`/messages/send/${id}`, message);
