import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.item}>
        <Text style={styles.itemText}>Notifications List</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Clear all</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Mark all as read</Text>
      </View>
    </View>
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

export default Notifications;
