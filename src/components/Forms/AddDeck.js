import { connect } from 'react-redux';
import { fetchDecks } from '../../actions';
import { addDeck } from '../../utils/api';
import { Text, KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import Button from '../Generic/Button';
import React from 'react';

const basicState = () => ({ title: '', errorMessage: false });

class AddDeck extends React.Component {
  state = basicState();

  handleSubmit = () => {
    const { title } = this.state;
    const { fetchDecks, navigation } = this.props;

    if (title) {
      addDeck(title);
      this.setState(basicState());
      fetchDecks();
      navigation.navigate(
        'DeckDetails',
        { deckId: title, navTitle: title },
        Keyboard.dismiss(),
      );
    } else {
      this.setState({ errorMessage: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Card title="Deck creation">
          <FormLabel>Title:</FormLabel>
          <FormInput
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
          {this.state.errorMessage && (
            <FormValidationMessage>Field required</FormValidationMessage>
          )}
          <Button
            title="Create Deck"
            type="secondary"
            buttonStyle={{ marginTop: 10 }}
            raised
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default connect(null, { fetchDecks })(AddDeck);
