import { Card } from 'react-native-elements';
import Button from '../Generic/Button';
import { red, lightgreen, blue, transparent } from '../../utils/colors';
import { connect } from 'react-redux';
import { deleteDeck } from '../../actions';
import { NavigationActions } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

const DeckDetails = ({ title, questions, navigation, deleteCurrentDeck }) => (
  <View style={styles.container}>
    <Card title={title}>
      <Text style={styles.cardsQty}>
        {questions ? questions.length : 0} cards
      </Text>
      <View>
        <Button
          title="Create New Question"
          type="primaryInvert"
          buttonStyle={{ marginBottom: 10 }}
          onPress={() => {
            navigation.navigate('AddCard', {
              navTitle: title,
              title: title,
            });
          }}
        />
        <Button
          disabled={!questions || questions.lenth === 0}
          title="Start Quiz"
          type="primary"
          onPress={() => {
            navigation.navigate('Quiz', {
              navTitle: title,
              questions: questions,
            });
          }}
        />
      </View>
    </Card>
    <View>
      <Button
        title="Delete Deck"
        type="warning"
        buttonStyle={{ marginTop: 50 }}
        onPress={deleteCurrentDeck}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardsQty: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

const mapStateToProps = ({ decks = [] }, { navigation }) => {
  const deckDetails = decks.find(
    deck => deck.key === navigation.state.params.deckId,
  ) || { title: '', questions: [] };
  const { title, questions } = deckDetails;
  return { title, questions };
};

const mapDispatchToProps = (dispatch, { navigation }) => ({
  deleteCurrentDeck() {
    dispatch(deleteDeck(navigation.state.params.deckId));
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      }),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails);
