import axios from "axios";
const BASE_URL = "http://localhost:8001";

const JWT_TOKEN = localStorage.getItem("token");

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`
  }
});

export const login = async data => {
  try {
    const response = await apiClient.post("/auth/login", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await apiClient.get("/app/profile");
    const { user } = response.data;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signUp = async data => {
  try {
    const response = await apiClient.post("/auth/signup", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);

    return user;
  } catch (e) {
    throw e;
  }
};

export const addRestaurant = async (userId, restaurant) => {
  const response = await apiClient.post(`/dashboard/${userId}`, restaurant);
  return response;
};

export const removeFavRestaurant = async data => {
  try {
    console.log(data);
    const response = await apiClient.put("/auth/signup", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    console.log(user);
    return user;
  } catch (e) {
    throw e;
  }
};

export const showFaves = async () => {
  try {
    console.log("where");
    const resp = await apiClient.get(`/dashboard/1/favorites`);
    return resp.data.venues;
  } catch (error) {
    throw error;
  }
};
