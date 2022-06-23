import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';

// Stack
import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';

const appNavigator = () => {
  const [auth, setAuth] = useState(false);

  const context = {
    auth,
    getAuth: value => {
      setAuth(value);
    },
  };

  if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
