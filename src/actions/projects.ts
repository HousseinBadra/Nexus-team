import ActionTypes from '../actionTypes/projects';
import { Project } from '../types/project';

export const getAllProjects = (query: string, keywords: string[]) => ({
  type: ActionTypes.GET_ALL_PROJECTS,
  query,
  keywords,
});

export const getProjectById = (id: string) => ({
  action: ActionTypes.GET_PROJECT_BY_ID,
  id,
});

export const createProject = (project: Project) => ({
  action: ActionTypes.CREATE_PROJECT,
  project,
});

export const updateProject = (id: string, project: Project) => ({
  action: ActionTypes.UPDATE_PROJECT,
  id,
  project,
});

export const deleteProject = (id: string) => ({
  action: ActionTypes.DELETE_PROJECT,
  id,
});

export const subProject = (projectId: string, userId: string) => ({
  action: ActionTypes.SUB_PROJECT,
  projectId,
  userId,
});

export const unsubProject = (projectId: string, userId: string) => ({
  action: ActionTypes.UNSB_PROJECT,
  projectId,
  userId,
});
