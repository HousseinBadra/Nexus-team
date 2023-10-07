// authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/auth'; // replace with your actual API URL

const signUp = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signUp`, { email, password });
  return response;
};
const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signIn`, { email, password });
  return response;
};

export default {
  signUp,
  signIn,
};
