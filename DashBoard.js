import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExpenseEntryForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Entry Form</Text>
    </View>
  );
};

const ExpenseDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Expense Details</Text>
    </View>
  );
};

const ExpenseList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense List</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const DashBoard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExpenseEntryForm')}>
        <Text style={styles.itemText}>Expense Entry Form</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EditInfo')}>
        <Text style={styles.itemText}>Edit Expense Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExpenseLists')}>
        <Text style={styles.itemText}>Expense Lists</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const Dashboard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ExpenseEntryForm" component={ExpenseEntryForm} />
      <Stack.Screen name="EditInfo" component={EditInfo} />
      <Stack.Screen name="ExpenseLists" component={ExpenseLists} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20,
  },
  item: {
    backgroundColor: '#1DB954',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

export default DashBoard;
