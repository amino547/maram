
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/about';

export const getAboutItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getAboutItem = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createAboutItem = async (aboutItem) => {
  const response = await axios.post(API_URL, aboutItem);
  return response.data;
};

export const updateAboutItem = async (id, aboutItem) => {
  const response = await axios.patch(`${API_URL}/${id}`, aboutItem);
  return response.data;
};

export const deleteAboutItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
