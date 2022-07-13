import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Redux cart action
import * as actionCart from '../../store/action/cart';
import * as actionOrder from '../../store/action/order';

// components
import OrderContent from '../../components/product/orderContent';
import styles from './Style';

const Order = () => {
  const dispatch = useDispatch();

  const cartList = useSelector(state => {
    let updateCartItem = [];
    let cartData = state.cartList.carts;

    for (const key in cartData) {
      updateCartItem.push({
        id: cartData[key].id,
        quantity: cartData[key].quantity,
        imageUrl: cartData[key].imageUrl,
        title: cartData[key].title,
        price: cartData[key].price,
        currency: cartData[key].currency,
        description: '',
      });
    }
    return updateCartItem;
  });

  useEffect(() => {
    console.log('order item -------', cartList);
  }, []);

  const removeHandler = value => {
    dispatch(actionCart.removeFromCart(value));
  };

  const orderHandler = value => {
    dispatch(actionOrder.addOrder(value));
  };

  return (
    <View style={styles.container}>
      <OrderContent
        data={cartList}
        removeAction={removeHandler}
        orderAction={orderHandler}
      />
    </View>
  );
};

export default Order;
