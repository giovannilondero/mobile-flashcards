import { RECEIVE_DECK, DELETE_DECK } from '../actions/_types';

const decksReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DECK:
    case DELETE_DECK:
      return action.decks;
    default:
      return state;
  }
};

export default decksReducer;
