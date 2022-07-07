import React from 'react';
import {View, Text, Image, TouchableOpacity, Touchable} from 'react-native';

// Style
import styles from './style';

const orderContent = props => {
  return (
    <>
      {props.data ? (
        props.data.map(item => (
          <View style={styles.container} key={item.id}>
            {/* order information */}
            <View style={styles.leftContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <View style={styles.productInfo}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>
                  Price : {item.price} {item.currency}
                </Text>
              </View>
            </View>

            {/* confirm order */}
            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Empty Cart</Text>
        </View>
      )}
    </>
  );
};

export default orderContent;
