import { StyleSheet, Text, View } from 'react-native';
import DeckList from './Deck/DeckList';
import React from 'react';

const Homepage = props => (
  <View style={styles.container}>
    <DeckList {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Homepage;
