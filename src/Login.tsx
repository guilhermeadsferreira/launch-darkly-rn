import { useState } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { client } from './launch-darkly/client';
import { styles } from './styles';

const users = {
  'fin@maistodos.com.br': {
    key: '9f08a7c3-7ac2-461d-a82b-5c3e8983e1bf',
    name: 'Luis Fin',
    email: 'fin@maistodos.com.br',
    role: 'admin',
  },
  'guilherme@maistodos.com.br': {
    key: '343ff13e-045e-4492-adcf-7cfc1273d838',
    name: 'Guilherme Augusto',
    email: 'guilherme@maistodos.com.br',
    role: 'developer',
  },
} as const;

const Login = ({ onCurrentRouteChange }: { onCurrentRouteChange: (currentRoute: string) => void }) => {
  const [email, setEmail] = useState('fin@maistodos.com.br');
  const [senha, setSenha] = useState('1234');

  const handleLogin = async () => {
    const context = users[email as keyof typeof users];
    await client.identify({
      kind: 'user',
      ...context,
    });
    onCurrentRouteChange('home');
  };

  return (
    <View style={styles.containerLogin}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.titleLogin}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" value={senha} onChangeText={setSenha} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
