import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';

// AppNavigator
import AppNavigator from './src/navigation/appNavigator';

const App = () => {
  return <AppNavigator />;
};

export default codePush(App);
