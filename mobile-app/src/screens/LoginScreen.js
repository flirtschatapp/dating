import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { request } from '../api/client';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      const data = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      Alert.alert('Logged in', `Welcome to FlirtsChat. Token: ${data.token.slice(0, 12)}...`);
    } catch (error) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlirtsChat Login</Text>
      <TextInput placeholder="Email" autoCapitalize="none" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#090c1c' },
  title: { color: '#8be8ff', fontSize: 28, marginBottom: 24, fontWeight: '700' },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    padding: 12
  }
});
