import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';
import { DELETE_DECK, RECEIVE_DECK } from './_types';
import { catchAsyncActionsErrors } from '../utils/helpers';

export const fetchDecks = () =>
  catchAsyncActionsErrors(async dispatch => {
    const decks = await getDecks();
    dispatch({ type: RECEIVE_DECK, decks });
  });

export const deleteDeck = removeTitle =>
  catchAsyncActionsErrors(async dispatch => {
    await AsyncStorage.removeItem(removeTitle);
    const decks = await getDecks();
    dispatch({ type: DELETE_DECK, decks });
  });
