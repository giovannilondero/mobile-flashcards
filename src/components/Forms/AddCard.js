import { addCard } from '../../utils/api';
import { connect } from 'react-redux';
import { fetchDecks } from '../../actions';
import { KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native';
import {
  Card,
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import Button from '../Generic/Button';
import React from 'react';

const basicState = () => ({ question: '', answer: '', errorMessage: false });

class AddCard extends React.Component {
  state = basicState();

  handleSubmit = () => {
    if (this.state.question && this.state.answer) {
      const { question, answer } = this.state;
      const { navigation, fetchDecks } = this.props;
      const { title } = navigation.state.params;
      addCard(title, { question, answer });
      this.setState(basicState());
      fetchDecks();
      navigation.goBack(Keyboard.dismiss());
    } else {
      this.setState({ errorMessage: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Card title="Add a Card">
          <FormLabel>Question:</FormLabel>
          <FormInput
            onChangeText={question => this.setState({ question })}
            value={this.state.titleText}
          />
          <FormLabel>Answer:</FormLabel>
          <FormInput
            onChangeText={answer => this.setState({ answer })}
            value={this.state.titleText}
          />
          {this.state.errorMessage && (
            <FormValidationMessage>Fields required</FormValidationMessage>
          )}
          <Button
            title="Submit"
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

export default connect(null, { fetchDecks })(AddCard);
