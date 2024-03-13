import axios from "./axios";

export const getConversationsRequest = async () => axios.get("/users");