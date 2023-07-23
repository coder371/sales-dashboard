// src/sagas/dataSaga.js
import { put, takeLatest } from 'redux-saga/effects';
import {setSalesData} from './SalesSlice'; // Import the action creator
import apolloClient from '../apolloClient'; // Import the Apollo Client instance
import { gql } from '@apollo/client';

function* fetchDataSaga() {
  try {
    const { data } = yield apolloClient.query({
      query: gql`
        query Query {
            salesData {
                _id
                product
                salesRevenue
                region
            }
        }
      `,
    });

    yield put(setSalesData(data)); // Dispatch the action to store the fetched data in the Redux store
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error or dispatch an error action if needed
  }
}

function* salesDataSaga() {
  yield takeLatest('salesData/fetchSalesData', fetchDataSaga); // Replace 'FETCH_DATA' with your desired action type
}

export default salesDataSaga