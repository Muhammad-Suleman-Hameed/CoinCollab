import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExpenseEntryForm = () => {
  const inputFieldWidth = windowWidth * 0.78;
  const inputFieldHeight = windowHeight * 0.088;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Entry Form</Text>

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Amount"
      />

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Expense date"
      />

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Customer name"
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  inputField: {
    backgroundColor: '#D9D9D9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginVertical: windowHeight * 0.015,
    paddingHorizontal: windowHeight * 0.02,
    borderRadius: windowHeight * 0.008,
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
    fontWeight: 'bold',
  },
});

export default ExpenseEntryForm;
