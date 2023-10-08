import ActionTypes from '../actionTypes/projects';
import { Project } from '../types/project';

export const getAllProjects = (query: string, keywords: string[]) => ({
  type: ActionTypes.GET_ALL_PROJECTS,
  query,
  keywords,
});

export const getProjectById = (id: string) => ({
  type: ActionTypes.GET_PROJECT_BY_ID,
  id,
});

export const createProject = (project: Project) => ({
  type: ActionTypes.CREATE_PROJECT,
  project,
});

export const updateProject = (id: string, project: Project) => ({
  type: ActionTypes.UPDATE_PROJECT,
  id,
  project,
});

export const deleteProject = (id: string) => ({
  type: ActionTypes.DELETE_PROJECT,
  id,
});

export const subProject = (projectId: string, userId: string) => ({
  type: ActionTypes.SUB_PROJECT,
  projectId,
  userId,
});

export const unsubProject = (projectId: string, userId: string) => ({
  type: ActionTypes.UNSB_PROJECT,
  projectId,
  userId,
});
