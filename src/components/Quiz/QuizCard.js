import { Badge, Card } from 'react-native-elements';
import Button from '../Generic/Button';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const QuizCard = ({
  card,
  cardIndex,
  questionsQty,
  isQuestion,
  onChangeCardSide,
  onSelectCorrect,
  onSelectIncorrect,
}) => (
  <Card title={isQuestion ? `Q: ${card.question}` : `A: ${card.answer}`}>
    <View>
      <Text style={styles.questionsRemaining}>
        {`Card ${cardIndex} of ${questionsQty}`}
      </Text>
    </View>
    <View style={styles.toggler}>
      <Text style={styles.togglerText} onPress={onChangeCardSide}>
        See {isQuestion ? 'Answer' : 'Question'}
      </Text>
    </View>
    <Button title="Correct" type="primary" onPress={onSelectCorrect} />
    <Button
      buttonStyle={{ marginTop: 10 }}
      title="Incorrect"
      type="warning"
      onPress={onSelectIncorrect}
    />
  </Card>
);

const styles = StyleSheet.create({
  questionsRemaining: {
    textAlign: 'center',
    marginBottom: 10,
  },
  toggler: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
  },
  togglerText: {
    textDecorationLine: 'underline',
  },
});

export default QuizCard;
