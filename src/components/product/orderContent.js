import React from 'react';
import {View, Text, Image, TouchableOpacity, Touchable} from 'react-native';

// Style
import styles from './style';

const orderContent = props => {
  return (
    <>
      {props.data.length > 0 ? (
        props.data.map(item => (
          <View style={styles.container} key={item.id}>
            {/* order information */}
            <View style={styles.leftContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <View style={styles.productInfo}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.name}>{item.title}</Text>
                  {item.quantity > 1 && (
                    <Text style={styles.quantity}>{item.quantity}</Text>
                  )}
                </View>
                <Text style={styles.price}>
                  Price : {item.price} {item.currency}
                </Text>
              </View>
            </View>

            {/* confirm order */}
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={[styles.confirmBtn, {backgroundColor: '#3399F2'}]}
                onPress={() => props.removeAction(item)}>
                <Text style={styles.confirmText}>Remove</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={() => props.orderAction(item)}>
                <Text style={styles.confirmText}>Order Now</Text>
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
