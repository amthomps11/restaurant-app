import axios from "axios";
const BASE_URL = process.env.BASE_URL;

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
  } catch (e) {
    throw e;
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
  let restName = restaurant.name;
  const venues = await apiClient.get("/venues");
  let isIn = false;
  let venueId;

  venues.data.forEach(venue => {
    if (venue.name === restName) {
      isIn = true;
      venueId = venue.id;
    }
  });
  if (!isIn) {
    const response = await apiClient.post(`/dashboard/${userId}`, restaurant);
    return response;
  } else {
    const venueToAssociate = await apiClient.get(`/venues/${venueId}`);
    console.log(venueToAssociate);
    const response = await apiClient.put(
      `/dashboard/create/${userId}/${venueId}`
    );
    return response;
  }
};

export const showFaves = async () => {
  try {
    const userId = await localStorage.getItem("userID");
    const resp = await apiClient.get(`/dashboard/${userId}/favorites`);
    console.log(resp);
    return resp.data.venues;
  } catch (e) {
    throw e;
  }
};

export const unFavorite = async venueId => {
  const userId = await localStorage.getItem("userID");
  await apiClient.put(`/dashboard/${userId}/${venueId}`);
};
