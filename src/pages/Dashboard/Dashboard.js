import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import CryptoJs from 'crypto-js';
import {useDispatch} from 'react-redux';

// Components
import styles from './Style';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils';
import {useLocal} from '../../hook';
import Header from '@components/dashboard/dashboardHeader';
import ProductList from '@components/dashboard/product/productList';

// From Redux action
import * as ActionProducts from '../../store/action/product';

// Data
import ProductData from '../../data/product';

const EncKEY = 'admin123$';
const DecKEY = 'admin123';

const Dashboard = ({navigation}) => {
  const {getAuth, userInfo} = useContext(AuthContext);

  const local = useLocal();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      const data = appStorage.getItem('@user.data');
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    try {
      appStorage.removeItem('@user.token');
      getAuth(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addToCartHandler = () => {
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };

  const detailHandler = value => {
    dispatch(ActionProducts.addProducts(value));
    navigation.navigate('ProductDetail', {data: value});
  };

  // const encryption = () => {
  //   const encData = CryptoJs.AES.encrypt(
  //     JSON.stringify(value),
  //     EncKEY,
  //   ).toString();
  //   console.log('data enc ::', encData);
  //   fetch('url', {data: encData});

  //   const decData = CryptoJs.AES.decrypt(encData, EncKEY).toString(
  //     CryptoJs.enc.Utf8,
  //   );

  //   console.log('dec data ::', decData);
  // };

  return (
    <View style={styles.container}>
      {/* user information */}
      <Header
        data={userInfo}
        logout={logoutHandler}
        logoutTitle={local.logout}
      />

      {/* product list */}
      <ProductList
        data={ProductData}
        priceTitle={local.price}
        addToCartTitle={local.addToCart}
        addToCartAction={addToCartHandler}
        productDetail={detailHandler}
      />
    </View>
  );
};

export default Dashboard;
