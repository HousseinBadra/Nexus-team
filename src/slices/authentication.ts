/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthenticationMessage } from '../types/authentication';

type InitialStateType = {
  auth: AuthenticationMessage | null;
  authLoading: boolean;
  error: string | null;
};

const initialState: InitialStateType = {
  auth: null,
  authLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logOut: (state) => {
      state.auth = null;
    },
    authenticationStarted: (state) => {
      state.authLoading = true;
      state.error = null;
    },
    authenticationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.authLoading = false;
    },
    authenticationSuccess: (state, action: PayloadAction<AuthenticationMessage>) => {
      state.authLoading = false;
      state.auth = action.payload;
    },
  },
});

export default AuthSlice.reducer;

export const AuthActions = AuthSlice.actions;
