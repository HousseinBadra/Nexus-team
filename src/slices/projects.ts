/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Project } from '../types/project';

type InitialStateType = {
  projects: Project[];
  visitedProject: Project | null;
  isProjectsLoading: boolean;
  isVisitedProjectLoading: boolean;
  response: string | null;
  error: string | null;
  isCreatingProject: boolean;
  isEditingProject: boolean;
  isDeletingProject: boolean;
  isUpdatingProject: boolean;
  isSubLoading: boolean;
};

const initialState: InitialStateType = {
  projects: [],
  visitedProject: null,
  isProjectsLoading: false,
  isVisitedProjectLoading: false,
  isCreatingProject: false,
  isEditingProject: false,
  isDeletingProject: false,
  isUpdatingProject: false,
  response: null,
  error: null,
  isSubLoading: false,
};

const ProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getAllProjectsStarted: (state) => {
      state.isProjectsLoading = true;
    },
    getAllProjectsError: (state) => {
      state.isProjectsLoading = false;
    },
    getAllProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.isProjectsLoading = false;
      state.projects = action.payload;
    },

    getVisitedProjectsStarted: (state) => {
      state.isVisitedProjectLoading = true;
    },
    getVisitedProjectsError: (state) => {
      state.isVisitedProjectLoading = false;
    },
    getVisitedProjectsSuccess: (state, action: PayloadAction<Project>) => {
      state.isVisitedProjectLoading = false;
      state.visitedProject = action.payload;
    },
    createProjectsStarted: (state) => {
      state.isCreatingProject = true;
    },
    createProjectsError: (state) => {
      state.isCreatingProject = false;
    },
    createProjectsSuccess: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },

    updateProjectsStarted: (state) => {
      state.isEditingProject = true;
    },
    updateProjectsError: (state) => {
      state.isEditingProject = false;
    },
    updateProjectsSuccess: (state, action: PayloadAction<Project>) => {
      state.projects = state.projects.map((e) => {
        if (e._id === action.payload._id) return action.payload;
        return e;
      });
      state.isEditingProject = false;
    },

    deleteProjectsStarted: (state) => {
      state.isDeletingProject = true;
    },
    deleteProjectsError: (state) => {
      state.isDeletingProject = false;
    },
    deleteProjectsSuccess: (state, action: PayloadAction<string>) => {
      state.isDeletingProject = false;
      state.projects = state.projects.filter((e) => e._id !== action.payload);
    },

    subProjectsStarted: (state) => {
      state.isSubLoading = true;
    },
    subProjectsError: (state) => {
      state.isSubLoading = false;
    },
    subProjectsSuccess: (state, action: PayloadAction<{ _id: string; user_id: string }>) => {
      state.projects.forEach((e) => {
        if (e._id === action.payload._id) e.watching.push(action.payload.user_id);
      });
    },

    unsubProjectsStarted: (state) => {
      state.isSubLoading = true;
    },
    unsubProjectsError: (state) => {
      state.isSubLoading = false;
    },
    unsubProjectsSuccess: (state, action: PayloadAction<{ _id: string; user_id: string }>) => {
      state.projects.forEach((e) => {
        if (e._id === action.payload._id)
          e.watching = e.watching.filter((ele) => ele !== action.payload.user_id);
      });
    },
  },
});

export default ProjectsSlice.reducer;

export const AuthActions = ProjectsSlice.actions;
