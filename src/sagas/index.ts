import createSagaMiddleware from 'redux-saga';
import watchManageAuthentication from './authentication';

const sagaMiddleWare = createSagaMiddleware();

export const runSagas = () => {
  sagaMiddleWare.run(watchManageAuthentication);
};

export default sagaMiddleWare;
