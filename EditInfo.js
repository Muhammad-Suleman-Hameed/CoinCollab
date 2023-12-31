import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExpForm = () => {
  const inputFieldWidth = windowWidth * 0.78;
  const inputFieldHeight = windowHeight * 0.088;
  const [formSaved, setFormSaved] = useState(false);

  const handleFormSubmit = () => {
    setFormSaved(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Information</Text>

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Edit Amount"
      />

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Edit Expense date"
      />

      <TextInput
        style={[styles.inputField, { width: inputFieldWidth, height: inputFieldHeight }]}
        placeholder="Edit Customer name"
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
  savedText: {
    color: '#1DB954',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default ExpForm;
