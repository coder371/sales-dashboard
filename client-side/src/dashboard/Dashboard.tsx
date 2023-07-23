import { useEffect, type FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboard } from './DashboardSlice';
import {Page} from '../app/common/layouts'


import { FC } from 'react';
const Dashboard: FC = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchDashboard());
  }, [dispatch])
  const salesData = useSelector(state => state.dashboard);
  console.log(salesData);

  return (
    <Page title='Dashboard'>test</Page>
  )

};

export default Dashboard;
