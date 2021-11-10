import { useNavigation } from '@react-navigation/core';
import Button from '../components/ButtonComponent';
import React from 'react';
import { View, TextInput } from 'react-native';

interface Props { }

const LoginScrenn: React.FC<Props> = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => {}} />
    </View>
  );
};

export default LoginScrenn;
