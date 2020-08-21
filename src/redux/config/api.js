import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "https://dumbsound-ade.herokuapp.com/api/v1",
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const BASE_URL = "https://dumbsound-ade.herokuapp.com";

// 

// URL REFERENSE
export const URL_MUSIC_ALL = "/music",
  URL_LOGIN = "/login";
