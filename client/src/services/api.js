import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:5000'; 
export const registerUser = (userData) => {
  return Axios.post("/api/users/register", userData);
};
export const loginUser = (credentials) => {
  return Axios.post("/api/users/login", credentials);
};
export const getUserDetails = () => {
  return Axios.get("/api/users/profile");
};
export const updateUserDetails = (updatedUserData) => {
  return Axios.put("/api/users/profile", updatedUserData);
};
export default Axios; 
