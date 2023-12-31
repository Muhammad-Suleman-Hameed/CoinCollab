import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LanguageChanged = ({ navigation }) => {
  const handleDashboardPress = () => {
    // Navigate to the 'Dashboard' screen using navigation prop
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Language</Text>
        <Text style={styles.message}>Your preferred language has been selected.</Text>

        {/* Dashboard button */}
        <TouchableOpacity style={styles.buttonStyle} onPress={handleDashboardPress}>
          <Text style={styles.buttonText}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    width: windowWidth * 0.84,
    height: windowHeight * 0.6, // Adjusted height for content container
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.06,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: windowWidth * 0.1, // Adjusted font size for title
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.05,
  },
  message: {
    color: '#1DB954',
    fontSize: windowWidth * 0.08, // Adjusted font size for message
    fontFamily: 'sans-serif',
    fontWeight: '400',
    marginBottom: windowHeight * 0.05,
  },
  buttonStyle: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: windowHeight * 0.05, // Adjusted margin top for button
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.05, // Adjusted font size for button text
    fontWeight: 'bold',
  },
});

export default LanguageChanged;
