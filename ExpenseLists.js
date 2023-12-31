import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExpenseLists = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Lists</Text>

      <TouchableOpacity style={[styles.item, { marginBottom: windowHeight * 0.03, padding: windowHeight * 0.025 }]} onPress={() => navigation.navigate('Records')}>
        <Text style={styles.itemText}>Record 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, { marginBottom: windowHeight * 0.03, padding: windowHeight * 0.025 }]} onPress={() => navigation.navigate('Records')}>
        <Text style={styles.itemText}>Record 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, { marginBottom: windowHeight * 0.03, padding: windowHeight * 0.025 }]} onPress={() => navigation.navigate('Records')}>
        <Text style={styles.itemText}>Record 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.03,
  },
  title: {
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
    marginLeft: windowWidth * 0.05,
  },
  item: {
    backgroundColor: '#1DB954',
    borderRadius: windowWidth * 0.03,
    padding: windowHeight * 0.025,
  },
  itemText: {
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

export default ExpenseLists;
