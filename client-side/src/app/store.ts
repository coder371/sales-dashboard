import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import salesDataReducer from '../sales/SalesSlice';
import dashboardReducer from '../dashboard/DashboardSlice';
import rootSaga from './saga';

const saga = createSagaMiddleware();
const reducer = combineReducers({
  salesData: salesDataReducer,
  dashboardReducer: dashboardReducer,
});

// let persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer,
  middleware: [saga],
});

saga.run(rootSaga);
// export const persistor = persistStore(store);
