// authService.js
import axios from 'axios';

const API_URL = 'http://54.159.116.83:3001/auth'; // replace with your actual API URL

const signUp = async (email: string, password: string, fullName: string, description: string) => {
  const response = await axios.post(`${API_URL}/signUp`, {
    email,
    password,
    fullName,
    description,
  });
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
