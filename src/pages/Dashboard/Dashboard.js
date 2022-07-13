import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import CryptoJs from 'crypto-js';
import {useDispatch, useSelector} from 'react-redux';

// Components
import styles from './Style';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils';
import {useLocal} from '../../hook';
import Header from '@components/dashboard/dashboardHeader';
import ProductList from '@components/dashboard/product/productList';

// From Redux action
import * as actionProducts from '../../store/action/product';

// Data
import ProductData from '../../data/product';

const EncKEY = 'admin123$';
const DecKEY = 'admin123';

const Dashboard = ({navigation}) => {
  const {getAuth, userInfo} = useContext(AuthContext);

  const local = useLocal();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productList.products);

  useEffect(() => {
    // getData();
    dispatch(actionProducts.addProducts(ProductData));
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

  const deleteProduct = value => {
    dispatch(actionProducts.deleteProduct(value.id));
    ToastAndroid.show(`you deleted ${value.title}`, ToastAndroid.SHORT);
  };

  const detailHandler = value => {
    navigation.navigate('ProductDetail', {data: value});
  };

  const addProdcutHandler = () => {
    let data = {
      id: 1,
      quantity: 1,
      imageUrl: require('@assets/images/banana.png'),
      title: 'New',
      price: 200,
      currency: 'MMK',
      description: '',
    };

    dispatch(actionProducts.addProducts(data));
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
        addProductAction={addProdcutHandler}
        addProductTitle={'Add New'}
      />

      {/* product list */}
      <ProductList
        data={products}
        priceTitle={local.price}
        addToCartTitle={local.addToCart}
        deleteAction={deleteProduct}
        productDetail={detailHandler}
      />
    </View>
  );
};

export default Dashboard;
