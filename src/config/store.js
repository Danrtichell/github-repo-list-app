import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';

import reducers from '../redux/ducks';
import rootSaga from '../redux/sagas';

let createAppStore;
let store;

const sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
    stateTransformer(state) {
      return state.toJS();
    },
  });

  createAppStore = applyMiddleware(sagaMiddleware, logger)(createStore);
} else {
  createAppStore = applyMiddleware(sagaMiddleware)(createStore);
}

const whitelistReducer = ['persist'];

const configureStore = onComplete => {
  store = autoRehydrate()(createAppStore)(reducers);
  persistStore(
    store,
    { storage: AsyncStorage, whitelist: whitelistReducer },
    onComplete
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const getStore = () => store;

export default configureStore;
