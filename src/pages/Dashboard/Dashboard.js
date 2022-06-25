import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import styles from './Style';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils';

const Dashboard = () => {
  const {getAuth} = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      const data = appStorage.getItem('@user.data');
      console.log('user data ::', data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeHandler = () => {
    try {
      appStorage.removeItem('@user.data');
      getAuth(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.titleOne}>Welcome to dashboard</Text>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity onPress={removeHandler}>
        <Text>Remove Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
