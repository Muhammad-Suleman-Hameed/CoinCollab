import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage > 3) {
      navigation.replace('SignUp'); // Replace with the home screen name
    }
  }, [currentPage, navigation]);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderContent = () => {
    let headerText = '';
    let descriptionText = '';
    let buttonText = '';

    switch (currentPage) {
      case 1:
        headerText = 'Welcome to Expense Tracker';
        descriptionText = 'Efficiently manage your expenses and budgets with ease.';
        buttonText = 'Next';
        break;
      case 2:
        headerText = 'Track, Categorize, and Budget';
        descriptionText = 'Easily track your expenses, categorize them, and set personalized budgets for better control.';
        buttonText = 'Next';
        break;
      case 3:
        headerText = 'Advanced Features for Business';
        descriptionText = 'Add notes, attach receipts, and generate detailed expense reports for business needs.';
        buttonText = 'Get Started';
        break;
      default:
        return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.1,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
    marginBottom: windowHeight * 0.1,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
});

export default OnboardingScreen;
