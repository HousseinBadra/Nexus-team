import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleWare, { runSagas } from './sagas/index';

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleWare),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

runSagas();

export default store;
