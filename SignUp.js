import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fieldHeight = windowHeight * 0.1;
  
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://192.168.0.106:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        if (responseData && responseData.user) {
          // Successful signup response containing user data
          const { _id, name, email } = responseData.user;
  
          // Perform actions with the user data (e.g., navigate to dashboard)
          navigation.navigate('Dashboard');
  
          // Resetting input fields to empty strings
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          // Handle unexpected response format
          console.error('Unexpected response format:', responseData);
          Alert.alert('Error', 'Sign up failed. Unexpected response format.');
        }
      } else {
        // Handle specific error messages from the backend
        if (responseData && responseData.message === 'Password is invalid') {
          Alert.alert('Error', 'Invalid password. Please try again.');
        } else {
          // Handle other errors
          console.error('Unexpected error:', responseData);
          Alert.alert('Error', 'Sign up failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'Sign up failed. Please try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.inputField, { height: fieldHeight }]}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={[styles.inputField, { height: fieldHeight }]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={[styles.inputField, { height: fieldHeight }]}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={[styles.inputField, { height: fieldHeight }]}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <TouchableOpacity
          style={[styles.button, { height: fieldHeight, backgroundColor: '#1DB954' }]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTextt}>Already a user? Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.05,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputField: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: windowWidth * 0.03,
    borderRadius: 8,
    marginBottom: windowHeight * 0.015,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: windowHeight * 0.015,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: windowHeight * 0.1, 
  },
  loginButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: windowHeight * 0.02,
  },
  buttonTextt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default SignUp;


