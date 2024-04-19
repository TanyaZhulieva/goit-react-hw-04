import axios from "axios"

const apiKey = "BAIHqE3gLRBqivcNCSr9zD_QcvZuidt1nXlsnI7GNDg"

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async ()=> {
    const response = await axios.get("seach/photos")
    return response
}