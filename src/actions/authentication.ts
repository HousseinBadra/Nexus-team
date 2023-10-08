import ActionTypes from '../actionTypes/authentication';

export const signUp = (email: string, password: string, fullName: string, description: string) => ({
  type: ActionTypes.SIGNUP,
  email,
  password,
  fullName,
  description,
});

export const logIn = (email: string, password: string) => ({
  type: ActionTypes.LOGIN,
  email,
  password,
});

export const logOut = () => ({
  type: ActionTypes.LOGOUT,
});
