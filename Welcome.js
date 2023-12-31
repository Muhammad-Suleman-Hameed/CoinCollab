import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome = ({ navigation }) => {
 const [visibleLetters, setVisibleLetters] = useState('');
 const logoText = 'CoinCollab';
 const delayBetweenLetters = 300;
 const delayAfterAnimation = 1000;

 useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      if (count < logoText.length) {
        setVisibleLetters((prevLetters) => prevLetters + logoText[count]);
        count++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setVisibleLetters(''); 
          navigation.replace('OnboardingScreen'); 
        }, delayAfterAnimation);
      }
    }, delayBetweenLetters);

    return () => clearInterval(timer);
 }, [logoText, navigation]);

 return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.centeredTitle}>
        <Text style={styles.coinText}>{visibleLetters || ''}</Text>
      </View>
      <Text style={styles.welcomeText}>CoinCollab 2024</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.1,
 },
 rectangle: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    backgroundColor: 'white',
    position: 'absolute',
    top: windowHeight * 0.05,
 },
 centeredTitle: {
    alignItems: 'center',
    marginTop: windowHeight * 0.07, // Adjust margin if necessary
 },
 coinText: {
    color: '#1DB954',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
 },
 welcomeText: {
    color: 'black',
    fontSize: 18,
    position: 'absolute',
    bottom: windowHeight * 0.1,
    fontFamily: 'sans-serif',
 },
});

export default Welcome;