import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root.reducer';
import {createLogger} from 'redux-logger';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import sagas from './saga';
import Global from '../heleper/Global';
const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

const middleware: SagaMiddleware<object>[] = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const reducers = persistReducer(config, rootReducer);

const store = createStore(
  reducers,
  applyMiddleware(...middleware, createLogger()),
  // applyMiddleware(...middleware),
);
let persistor = persistStore(store);

const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default configureStore;
