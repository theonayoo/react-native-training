import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

// Styles
import styles from './style';

const header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email..."
          style={styles.input}
          value={props.emailValue}
          onChangeText={props.onChageEmail}
        />
        <TextInput
          placeholder="Password..."
          secureTextEntry
          value={props.passValue}
          onChangeText={props.onChagePass}
          style={[styles.input, {marginTop: 20}]}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>

      <View style={styles.accContainer}>
        {props.isLogin ? (
          <Text>You don't have account, please </Text>
        ) : (
          <Text>if you already have an account, please</Text>
        )}

        <TouchableOpacity onPress={props.footerAction}>
          <Text style={styles.footerText}>{props.footerText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;
