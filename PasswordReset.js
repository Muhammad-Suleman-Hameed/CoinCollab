
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    const emailRegex = /\S+@\S+\.\S+/;

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

    if (confirmPassword.trim() === '') {
      Alert.alert('Error', 'Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.106:5000/user/resetPassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData && responseData.message === 'Password updated successfully') {
          //Alert.alert('Success', 'Password reset successful');
          navigation.navigate('PwdReseted');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          Alert.alert('Error', responseData.message || 'Password reset failed. Please try again.');
        }
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Alert.alert('Error', 'Password reset failed. Please check your network connection and try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        style={styles.inputField}
        placeholder="Email or phone number"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.inputField}
        placeholder="New password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Confirm password"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleResetPassword}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: windowWidth * 0.05,
  },
  title: {
    color: '#121F2F',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.02,
  },
  inputField: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    backgroundColor: '#D9D9D9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginVertical: windowHeight * 0.01,
    paddingHorizontal: windowHeight * 0.02,
    borderRadius: windowHeight * 0.01,
  },
  submitButton: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    backgroundColor: '#1DB954',
    marginTop: windowHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontWeight: '400',
  },
});

export default PasswordReset;
