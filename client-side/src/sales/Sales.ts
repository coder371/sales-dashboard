import type { FC } from 'react';
import { useSelector } from 'react-redux';

interface SalesProps {}

const Sales: FC<SalesProps> = ({}) => {
    const salesData = useSelector(state => state.salesData.data);
    console.log(salesData);
    return null
}
export default Sales;