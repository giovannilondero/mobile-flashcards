import Button from '../Generic/Button';
import { Card } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const QuizReview = ({
  onStartOver,
  onBackDeck,
  correctAnswers,
  questionsQty,
}) => (
  <Card title={`${correctAnswers} on ${questionsQty}`}>
    <Button title="Start Over" type="primaryInvert" onPress={onStartOver} />
    <Button
      title="Back to Deck"
      type="primaryInvert"
      buttonStyle={{ marginTop: 10 }}
      onPress={onBackDeck}
    />
  </Card>
);

export default QuizReview;
