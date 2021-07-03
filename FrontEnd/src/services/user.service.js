import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getEditorBoard = () => {
  return axios.get(API_URL + "editor", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getResearcherBoard = () => {
  return axios.get(API_URL + "researcher", { headers: authHeader() });
};

const getReviewerBoard = () => {
  return axios.get(API_URL + "reviewer", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getEditorBoard,
  getAdminBoard,
  getResearcherBoard,
  getReviewerBoard
};
