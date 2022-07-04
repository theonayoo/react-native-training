import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Components
import {useLocal} from '../../hook';
import {fetchGet, fetchPost} from '../../utils';
import apiUrl from '../../utils/apiUrl';

// Icons
import Cart from '@assets/icons/cart';

// Style
import styles from './Style';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  const local = useLocal();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchPost(apiUrl.posts);
    console.log('product Details :::::', response);
  };

  const addToCart = () => {
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data.imageUrl} style={styles.productImage} />
      </View>

      <View style={styles.details}>
        <View>
          <Text>{data.title}</Text>
          <Text>
            {local.price} {data.price} {data.currency}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={addToCart}>
          <Cart width={wp(5)} height={hp(3)} />
          <Text style={styles.addToCartTitle}>{local.addToCart}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
