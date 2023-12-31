import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Records = ({ route }) => {
  const { userId } = route.params; // Retrieve the userId passed from navigation params

  // State variables to store user data
  const [userData, setUserData] = useState(null); // Initialize with null

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://192.168.0.106:5000/record/getCustomer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: userId, // Use the passed userId to fetch user data
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          if (responseData && responseData.customer) {
            // Assuming 'customer' contains the user data
            setUserData(responseData.customer);
          } else {
            Alert.alert('Error', 'Failed to fetch user data.');
          }
        } else {
          const errorData = await response.json();
          Alert.alert('Error', errorData.message || 'Failed to fetch user data.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        Alert.alert('Error', 'Failed to fetch user data. Please check your network connection.');
      }
    };

    fetchUserData();
  }, [userId]); // Run the effect whenever userId changes

  // Render userData in the UI
  return (
    // Your UI code here to display fetched user data
    // For example:
    <View style={styles.container}>
      <Text style={styles.title}>Expense Records</Text>
      {userData && (
        <View>
          <Text>Date: {userData.Date}</Text>
          <Text>Name: {userData.customerName}</Text>
          <Text>Expense: {userData.amount}</Text>
          {/* Add other fields as needed */}
        </View>
      )}
      {/* Other UI elements */}
    </View>
  );
};


//old code
/*import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Records = () => {
 

  const navigation = useNavigation(); 
  const handleFormBack = () => {
    navigation.navigate('ExpenseLists');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Records</Text>

      <View style={styles.recordField}>
        <Text>Date:</Text>
        <Text style={styles.fieldValue}>30 March 2001</Text>
      </View>

      <View style={styles.recordField}>
        <Text>Name:</Text>
        <Text style={styles.fieldValue}>Suleman</Text>
      </View>

      <View style={styles.recordField}>
        <Text>Expense:</Text>
        <Text style={styles.fieldValue}>15000</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={handleFormBack}>
      <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
   
    </View>
  );
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: windowWidth * 0.05,
  },
  title: {
    color: '#121F2F',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
  },
  recordField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  fieldValue: {
    marginLeft: 10,
    backgroundColor: '#D9D9D9',
    padding: 5,
    borderRadius: 8,
  },
  backButton: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    backgroundColor: '#1DB954',
    marginTop: windowHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  backText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  savedText: {
    color: '#1DB954',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Records;
