import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleWare, { runSagas } from './sagas/index';
import AuthSlice from './slices/authentication';
import ProjectsSlice from './slices/projects';

const store = configureStore({
  reducer: {
    AuthSlice,
    ProjectsSlice,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleWare),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

runSagas();

export default store;
