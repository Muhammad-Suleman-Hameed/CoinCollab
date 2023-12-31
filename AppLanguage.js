import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppLanguage = () => {
  const navigation = useNavigation();

  const buttonWidth = windowWidth * 0.8;
  const buttonHeight = windowHeight * 0.1;

  const handleLanguageChange = (language) => {
    if (language === 'English') {
      navigation.navigate('LanguageChanged');
    } else if (language === 'Urdu') {
      navigation.navigate('LanguageChanged');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Language</Text>

      <Text style={styles.subtitle}>Select language</Text>

      <TouchableOpacity
        style={[styles.button, { width: buttonWidth, height: buttonHeight }]}
        onPress={() => handleLanguageChange('English')}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { width: buttonWidth, height: buttonHeight }]}
        onPress={() => handleLanguageChange('Urdu')}
      >
        <Text style={styles.buttonText}>Urdu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: windowWidth * 0.1,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    marginBottom: windowHeight * 0.03,
    marginLeft: windowWidth * 0.05,
  },
  subtitle: {
    fontSize: windowWidth * 0.07,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    marginBottom: windowHeight * 0.05,
  },
  button: {
    backgroundColor: '#1DB954',
    borderRadius: 8,
    marginBottom: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontFamily: 'sans-serif',
    fontWeight: '400',
  },
  submitButton: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.08,
    backgroundColor: '#1DB954',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontFamily: 'sans-serif',
    fontWeight: '400',
  },
});

export default AppLanguage;
