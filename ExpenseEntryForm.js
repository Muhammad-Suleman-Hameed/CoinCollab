import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExpForm = () => {
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [formSaved, setFormSaved] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from AsyncStorage when the component mounts
    retrieveToken();
  }, []);

  const retrieveToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('auth_token');
      if (storedToken !== null) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('http://192.168.0.106:5000/record/addCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
        body: JSON.stringify({
          customerName: customerName,
          amount: amount,
        }),
      });

      const responseData = await response.text();

      if (response.ok) {
        try {
          const parsedData = JSON.parse(responseData);
          if (parsedData && parsedData.customer) {
            setFormSaved(true);
            setAmount('');
            setCustomerName('');
            // Do something with the received data upon successful submission
          } else {
            Alert.alert('Error', 'Failed to save form. Please try again.');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          Alert.alert('Error', 'Unexpected response format. Please try again.');
        }
      } else {
        const errorData = responseData;
        Alert.alert('Error', errorData.message || 'Failed to save form. Please try again.');
      }
    } catch (error) {
      console.error('Error saving form:', error);
      Alert.alert(
        'Error',
        'Failed to save form. Please check your network connection and try again.'
      );
    }
  };

  

  return (
    <View style={styles.container}>
  
      <TextInput
        style={styles.inputField}
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Customer name"
        value={customerName}
        onChangeText={(text) => setCustomerName(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {formSaved && <Text style={styles.savedText}>Form saved</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: windowWidth * 0.1,
  },
  inputField: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    backgroundColor: '#D9D9D9',
    marginVertical: windowHeight * 0.02,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  submitButton: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  savedText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1DB954',
  },
});

export default ExpForm;
