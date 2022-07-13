import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';

// Components
import {useLocal} from '../../hook';
import {fetchGet, fetchPost, fetchMultiPost} from '../../utils';
import apiUrl from '../../utils/apiUrl';

// Redux action
import * as actionCarts from '../../store/action/cart';
import * as actionProducts from '../../store/action/product';

// Icons
import Cart from '@assets/icons/cart';

// Style
import styles from './Style';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  const local = useLocal();
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchData();
    // console.log('redux data ::::', products);
  }, []);

  const uploadImage = async () => {
    launchImageLibrary().then(res => {
      try {
        if (photos.length >= 1) {
          // merge photo
          setPhotos(photos.concat(res.assets));
        } else {
          setPhotos(res.assets);
        }
      } catch (error) {
        console.log('error ::', error);
      }
    });
  };

  const fetchData = async () => {
    const uploadDdata = new FormData();
    let data = {
      title: data.title,
      price: data.price,
    };
    uploadDdata.append('data', data);
    photos.map(photo => {
      uploadDdata.append('images[]', {
        type: photo.type,
        name: photo.fileName,
        uri: photo.uri,
        width: photo.width,
        height: photo.height,
      });
    });
    // for (const key in photos) {
    //   uploadDdata.append('images[]', {
    //     type: photos[key].type,
    //     name: photos[key].fileName,
    //     uri: photos[key].uri,
    //     width: photos[key].width,
    //     height: photos[key].height,
    //   });

    const response = await fetchMultiPost(apiUrl.posts, uploadDdata);
    console.log('response data ::', response);
  };

  const addToCart = () => {
    dispatch(actionCarts.addToCart(data));
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };

  const updateHandler = () => {
    let updateData = {
      id: data.id,
      quantity: data.quantity,
      imageUrl: data.imageUrl,
      title: 'Update',
      price: 50,
      currency: data.currency,
      description: '',
    };
    dispatch(actionProducts.updateProduct(updateData));
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
        <View>
          <TouchableOpacity style={styles.btnContainer} onPress={addToCart}>
            <Cart width={wp(5)} height={hp(3)} />
            <Text style={styles.addToCartTitle}>{local.addToCart}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnContainer} onPress={updateHandler}>
            <Text style={styles.addToCartTitle}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>

      {/* <TouchableOpacity onPress={uploadImage} style={{marginTop: 40}}>
        <Text>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={fetchData} style={{marginTop: 40}}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ProductDetail;
