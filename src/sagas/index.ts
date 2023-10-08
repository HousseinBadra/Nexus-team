import createSagaMiddleware from 'redux-saga';
import watchManageAuthentication from './authentication';
import watchManageProjects from './projects';

const sagaMiddleWare = createSagaMiddleware();

export const runSagas = () => {
  sagaMiddleWare.run(watchManageAuthentication);
  sagaMiddleWare.run(watchManageProjects);
};

export default sagaMiddleWare;
