import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '../api/projects';
import { ProjectsActions } from '../slices/projects';
import ActionTypes from '../actionTypes/projects';
import { ResponseError, ResponseSuccess } from '../types/response';
import { Project } from '../types/project';

export function* getAllProjects(payload: { query: string; keywords: string[] }) {
  try {
    yield put(ProjectsActions.getAllProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<Project[]> | ResponseError> = yield call(() =>
      api.getAllProjects(payload.query, payload.keywords),
    );
    if (response.data.success) {
      yield put(ProjectsActions.getAllProjectsSuccess(response.data.message));
    } else {
      yield put(ProjectsActions.getAllProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.getAllProjectsError());
  }
}

export function* getProjectById(payload: { id: string }) {
  try {
    yield put(ProjectsActions.getVisitedProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<Project> | ResponseError> = yield call(() =>
      api.getProjectById(payload.id),
    );
    if (response.data.success) {
      yield put(ProjectsActions.getVisitedProjectsSuccess(response.data.message));
    } else {
      yield put(ProjectsActions.getVisitedProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.getVisitedProjectsError());
  }
}

export function* createProject(payload: { project: Project }) {
  try {
    yield put(ProjectsActions.createProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<Project> | ResponseError> = yield call(() =>
      api.createProject(payload.project),
    );
    if (response.data.success) {
      yield put(ProjectsActions.createProjectsSuccess(response.data.message));
    } else {
      yield put(ProjectsActions.createProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.createProjectsError());
  }
}

export function* updateProject(payload: { id: string; project: Project }) {
  try {
    yield put(ProjectsActions.updateProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<Project> | ResponseError> = yield call(() =>
      api.updateProject(payload.id, payload.project),
    );
    if (response.data.success) {
      yield put(ProjectsActions.updateProjectsSuccess(response.data.message));
    } else {
      yield put(ProjectsActions.updateProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.updateProjectsError());
  }
}

export function* deleteProject(payload: { id: string }) {
  try {
    yield put(ProjectsActions.deleteProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<string> | ResponseError> = yield call(() =>
      api.deleteProject(payload.id),
    );
    if (response.data.success) {
      yield put(ProjectsActions.deleteProjectsSuccess(response.data.message));
    } else {
      yield put(ProjectsActions.deleteProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.deleteProjectsError());
  }
}

export function* subProject(payload: { projectId: string; userId: string }) {
  try {
    yield put(ProjectsActions.subProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<string> | ResponseError> = yield call(() =>
      api.subProject(payload.projectId, payload.userId),
    );
    if (response.data.success) {
      yield put(
        ProjectsActions.subProjectsSuccess({ _id: payload.projectId, user_id: payload.userId }),
      );
    } else {
      yield put(ProjectsActions.subProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.subProjectsError());
  }
}

export function* unsubProject(payload: { projectId: string; userId: string }) {
  try {
    yield put(ProjectsActions.unsubProjectsStarted());
    const response: AxiosResponse<ResponseSuccess<string> | ResponseError> = yield call(() =>
      api.unsubProject(payload.projectId, payload.userId),
    );
    if (response.data.success) {
      yield put(
        ProjectsActions.unsubProjectsSuccess({ _id: payload.projectId, user_id: payload.userId }),
      );
    } else {
      yield put(ProjectsActions.unsubProjectsError());
    }
  } catch (error) {
    yield put(ProjectsActions.unsubProjectsError());
  }
}

function* watchManageProjects() {
  yield all([takeLatest(ActionTypes.GET_ALL_PROJECTS, getAllProjects)]);
  yield all([takeLatest(ActionTypes.GET_PROJECT_BY_ID, getProjectById)]);
  yield all([takeLatest(ActionTypes.CREATE_PROJECT, createProject)]);
  yield all([takeLatest(ActionTypes.UPDATE_PROJECT, updateProject)]);
  yield all([takeLatest(ActionTypes.DELETE_PROJECT, deleteProject)]);
  yield all([takeLatest(ActionTypes.SUB_PROJECT, subProject)]);
  yield all([takeLatest(ActionTypes.UNSB_PROJECT, unsubProject)]);
}

export default watchManageProjects;
