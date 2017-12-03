import { AsyncStorage } from 'react-native';
import { catchAsyncErrors } from './helpers';

export const getDecks = catchAsyncErrors(async () => {
  const keys = await AsyncStorage.getAllKeys();
  const stores = await AsyncStorage.multiGet(keys);

  return stores
    .map(([key, value]) => {
      const { title, questions } = JSON.parse(value);
      return { key, title, questions };
    })
    .filter(el => typeof el.questions !== 'undefined');
});

export const addDeck = catchAsyncErrors(async title => {
  AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
});

export const addCard = catchAsyncErrors(async (title, card) => {
  const item = await AsyncStorage.getItem(title);
  const data = JSON.parse(item);
  const questions = [...data.questions, card];

  AsyncStorage.mergeItem(title, JSON.stringify({ questions }));
});
