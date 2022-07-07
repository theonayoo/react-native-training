import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';

// Stack
import AuthStack from './stack/AuthStack';
import TabNavigator from './tabs/TabNavigator';
import {appStorage} from '../utils';
import reduxStore from '../store';

const appNavigator = () => {
  const [lang, setLang] = useState('en');
  const [auth, setAuth] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = () => {
    try {
      const userData = appStorage.getItem('@user.data');
      const token = appStorage.getItem('@user.token');
      const locale = appStorage.getItem('@lang');
      setUserInfo(JSON.parse(userData));
      setLang(locale);
      if (token) {
        setAuth(true);
        setTimeout(() => {
          setSplashScreen(false);
        }, 3000);
      } else {
        setAuth(false);
        setSplashScreen(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const context = {
    lang,
    auth,
    userInfo,
    getAuth: value => {
      setAuth(value);
    },
    getLang: value => {
      setLang(value);
    },
  };

  if (splashScreen) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to our app</Text>
      </View>
    );
  } else if (auth) {
    return (
      <Provider store={reduxStore}>
        <AuthContext.Provider value={context}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={reduxStore}>
        <AuthContext.Provider value={context}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    );
  }
};

export default appNavigator;
