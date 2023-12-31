import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const relativeWidth = windowWidth * 0.8;
  const relativeHeight = windowHeight * 0.1;

  const handleLogin = async () => {
    const emailRegex = /\S+@\S+\.\S+/;

    // Validation for email and password
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
  
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
  
    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.106:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData && responseData.token) {
         
          await AsyncStorage.setItem('auth_token', responseData.token);

          navigation.navigate('Dashboard');
          
          setEmail('');
          setPassword('');
        } else {
          
          console.error('Unexpected response format:', responseData);
          Alert.alert('Error', 'Login failed. Please check your credentials and try again.');
        }
      } else {
        
        if (responseData && responseData.message === 'Password is invalid') {
          Alert.alert('Error', 'Invalid password. Please try again.');
        } else {
          console.error('Unexpected error:', responseData);
          Alert.alert('Error', 'Login failed. Please check your credentials and try again.');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Login failed. Please check your network connection and try again.');
    }
  };
 

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      <TextInput
        style={styles.inputField(relativeWidth, relativeHeight)}
        placeholder="Email or phone number"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.inputField(relativeWidth, relativeHeight)}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
        <Text style={styles.forgottenPasswordText}>Forgotten password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  loginText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
    alignSelf: 'flex-start',
  },
  inputField: (width, height) => ({
    width,
    height,
    backgroundColor: '#D9D9D9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginVertical: windowHeight * 0.01,
    padding: windowHeight * 0.02,
    borderRadius: windowHeight * 0.01,
  }),
  loginButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: windowHeight * 0.02,
  },
  createAccountButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: windowHeight * 0.02,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgottenPasswordText: {
    color: '#1DB954',
    fontSize: 25,
    marginVertical: windowHeight * 0.02,
  },
});

export default Login;
