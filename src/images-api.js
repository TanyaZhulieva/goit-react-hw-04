import axios from "axios";

const API_KEY = "BAIHqE3gLRBqivcNCSr9zD_QcvZuidt1nXlsnI7GNDg";

axios.defaults.baseURL = "https://api.unsplash.com/photos/";

export const fetchImages = async (searchQuery) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: 1,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return response.data;
};
