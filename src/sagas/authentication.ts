import { all, takeEvery, call, put } from 'redux-saga/effects';
import { TakeableChannel } from 'redux-saga';
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

function* signUp(payload: {
  email: string;
  password: string;
  fullName: string;
  description: string;
}) {
  try {
    yield put(AuthActions.authenticationStarted());
    const response: AxiosResponse<ResponseSuccess<AuthenticationMessage> | ResponseError> =
      yield call(() =>
        api.signUp(payload.email, payload.password, payload.fullName, payload.description),
      );
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
const myArgument1: TakeableChannel<any> = ActionTypes.LOGIN as any as TakeableChannel<any>;
const myArgument2: TakeableChannel<any> = ActionTypes.LOGOUT as any as TakeableChannel<any>;
const myArgument3: TakeableChannel<any> = ActionTypes.SIGNUP as any as TakeableChannel<any>;

function* watchManageAuthentication() {
  yield all([takeEvery(myArgument1, logIn)]);
  yield all([takeEvery(myArgument2, logOut)]);
  yield all([takeEvery(myArgument3, signUp)]);
}

export default watchManageAuthentication;
