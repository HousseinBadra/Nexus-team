import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '../api/authentication';
import { AuthActions } from '../slices/authentication';
import ActionTypes from '../actionTypes/authentication';
import { AuthenticationMessage } from '../types/authentication';
import { ResponseError, ResponseSuccess } from '../types/response';

function* logIn(payload: { email: string; password: string }) {
  try {
    yield put(AuthActions.authenticationStarted());
    const response: AxiosResponse<ResponseSuccess<AuthenticationMessage> | ResponseError> =
      yield call(() => api.signIn(payload.email, payload.password));
    if (response.data.success) {
      yield put(AuthActions.authenticationSuccess(response.data.message));
    } else {
      yield put(AuthActions.authenticationError(response.data.message));
    }
  } catch (error) {
    yield put(AuthActions.authenticationError(String(error)));
  }
}

function* signUp(payload: { email: string; password: string }) {
  try {
    yield put(AuthActions.authenticationStarted());
    const response: AxiosResponse<ResponseSuccess<AuthenticationMessage> | ResponseError> =
      yield call(() => api.signUp(payload.email, payload.password));
    if (response.data.success) {
      yield put(AuthActions.authenticationSuccess(response.data.message));
    } else {
      yield put(AuthActions.authenticationError(response.data.message));
    }
  } catch (error) {
    yield put(AuthActions.authenticationError(String(error)));
  }
}
function* logOut() {
  try {
    yield put(AuthActions.logOut());
  } catch (error) {
    //
  }
}

function* watchManageAuthentication() {
  yield all([takeLatest(ActionTypes.LOGIN, logIn)]);
  yield all([takeLatest(ActionTypes.LOGOUT, logOut)]);
  yield all([takeLatest(ActionTypes.SIGNUP, signUp)]);
}

export default watchManageAuthentication;
