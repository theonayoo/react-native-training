import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

// components
import OrderContent from '../../components/product/orderContent';
import styles from './Style';

const Order = () => {
  const orderList = useSelector(state => state.productList.orders);

  useEffect(() => {
    console.log('order item -------', orderList);
  }, []);

  return (
    <View style={styles.container}>
      <OrderContent data={orderList} />
    </View>
  );
};

export default Order;
