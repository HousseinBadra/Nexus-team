import axios from 'axios';
import { Project } from '../types/project';

const API_URL = 'http://localhost:3001/auth'; // replace with your actual API URL

const getAllProjects = async (query: string, keywords: string[]) => {
  const response = await axios.get(
    `${API_URL}/projects/getAllProjects?generalSearch=${query}${keywords.reduce(
      (t, e) => `${t}&keyword=${e}`,
      '',
    )}`,
  );
  return response;
};

const getProjectById = async (id: string) => {
  const response = await axios.get(`${API_URL}/projects/getProjectById?id=${id}`);
  return response;
};

const createProject = async (project: Project) => {
  const response = await axios.post(`${API_URL}/projects/updateProject`, { project });
  return response;
};

const updateProject = async (id: string, project: Project) => {
  const response = await axios.post(`${API_URL}projects/updateProject`, { id, project });
  return response;
};

const deleteProject = async (id: string) => {
  const response = await axios.post(`${API_URL}/projects/deleteProject`, { id });
  return response;
};

const subProject = async (projectId: string, userId: string) => {
  const response = await axios.post(`${API_URL} /projects/subProject`, { projectId, userId });
  return response;
};

const unsubProject = async (projectId: string, userId: string) => {
  const response = await axios.post(`${API_URL}/projects/unsubProject`, { projectId, userId });
  return response;
};

export default {
  unsubProject,
  subProject,
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
};
