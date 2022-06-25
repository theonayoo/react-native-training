import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';

// Stack
import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import {appStorage} from '../utils';

const appNavigator = () => {
  const [lang, setLang] = useState('en');
  const [auth, setAuth] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = () => {
    try {
      const data = appStorage.getItem('@user.data');
      const locale = appStorage.getItem('@lang');
      setLang(locale);
      if (data) {
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
