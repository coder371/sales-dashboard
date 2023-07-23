import {all } from 'redux-saga/effects';
import salesDataSaga from '../sales/SalesSaga';
import dashboardSaga from '../dashboard/DashboardSaga';

export default function* rootSaga() {
    yield all([salesDataSaga(),dashboardSaga()]); // Add other Sagas here if needed
}
  