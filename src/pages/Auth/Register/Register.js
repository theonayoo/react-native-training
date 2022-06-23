import React, {useState} from 'react';
import {View, Text} from 'react-native';

// Components
import Header from '@components/login/header';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const goLogin = () => {
    console.log('email ::', email);
    console.log('password ::', password);
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View>
      <Header
        title={'Register'}
        buttonText={'Register'}
        emailValue={email}
        passValue={password}
        onChageEmail={val => setEmail(val)}
        onChagePass={val => setPassword(val)}
        action={goLogin}
        footerText={'login'}
        isLogin={login}
        footerAction={footerHandler}
      />
    </View>
  );
};

export default Register;
