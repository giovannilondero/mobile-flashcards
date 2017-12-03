import { NavigationActions } from 'react-navigation';
import { shuffle } from '../../utils/helpers';
import { StyleSheet, View } from 'react-native';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/notifications';
import QuizCard from './QuizCard';
import QuizReview from './QuizReview';
import React from 'react';

const basicState = (questions = []) => ({
  correctAnswers: 0,
  currentQuestion: 0,
  questions,
  isQuestion: true,
});

const resetNotification = () => {
  clearLocalNotification().then(setLocalNotification);
};

class Quiz extends React.Component {
  state = basicState(shuffle(this.getQuestions()));

  resetQuiz() {
    this.setState(() => basicState(shuffle(this.getQuestions())));
    resetNotification();
  }

  backToDeck() {
    const backAction = NavigationActions.back();
    this.resetQuiz();
    this.props.navigation.dispatch(backAction);
  }

  getQuestions() {
    return this.props.navigation.state.params.questions || [];
  }

  render() {
    const {
      questions,
      currentQuestion,
      correctAnswers,
      isQuestion,
    } = this.state;

    return (
      <View style={styles.container}>
        {currentQuestion < questions.length ? (
          <QuizCard
            card={questions[currentQuestion]}
            cardIndex={currentQuestion + 1}
            questionsQty={questions.length}
            isQuestion={isQuestion}
            onChangeCardSide={() => this.setState({ isQuestion: !isQuestion })}
            onSelectCorrect={() => {
              this.setState({
                currentQuestion: currentQuestion + 1,
                correctAnswers: correctAnswers + 1,
              });
            }}
            onSelectIncorrect={() =>
              this.setState({ currentQuestion: currentQuestion + 1 })
            }
          />
        ) : (
          <QuizReview
            onStartOver={() => this.resetQuiz()}
            onBackDeck={() => this.backToDeck()}
            correctAnswers={correctAnswers}
            questionsQty={questions.length}
          />
        )}
      </View>
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

export default Quiz;
