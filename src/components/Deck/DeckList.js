import { Badge, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const DeckList = ({ decks, navigation }) => (
  <View style={styles.container}>
    {decks.length ? (
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DeckDetails', {
                deckId: item.key,
                navTitle: item.title,
              })
            }
          >
            <View>
              <Card title={item.title}>
                <Text style={styles.cardQty}>
                  {`${item.questions.length} cards`}
                </Text>
              </Card>
            </View>
          </TouchableOpacity>
        )}
      />
    ) : (
      <View style={styles.noDecks}>
        <Text>No decks present, create one.</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  cardQty: {
    textAlign: 'center',
  },
  noDecks: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(DeckList);
