import React, {useState} from 'react';
import {View, Text} from 'react-native';

// Components
import Header from '@components/login/header';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const goLogin = () => {
    console.log('email ::', email);
    console.log('password ::', password);
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View>
      <Header
        title={'Login'}
        buttonText={'Login'}
        emailValue={email}
        passValue={password}
        onChageEmail={val => setEmail(val)}
        onChagePass={val => setPassword(val)}
        action={goLogin}
        footerText={'regsiter'}
        isLogin={login}
        footerAction={footerHandler}
      />
    </View>
  );
};

export default Login;
