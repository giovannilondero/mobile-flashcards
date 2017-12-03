import { MaterialCommunityIcons } from '@expo/vector-icons';
import { green } from './src/utils/colors';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AddDeck from './src/components/Forms/AddDeck';
import AddCard from './src/components/Forms/AddCard';
import DeckDetails from './src/components/Deck/DeckDetails';
import Homepage from './src/components/Homepage';
import Quiz from './src/components/Quiz/Quiz';
import React from 'react';

export const Tabs = TabNavigator({
  Decks: {
    screen: Homepage,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
      ),
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="plus-box" size={30} color={tintColor} />
      ),
    },
  },
});

const createStackNavOptions = title => ({
  title,
  headerTintColor: '#eee',
  headerStyle: {
    backgroundColor: green,
  },
});

export const DeckFlow = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: createStackNavOptions('Flashcards'),
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: createStackNavOptions(),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: createStackNavOptions(),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: createStackNavOptions(),
  },
});
