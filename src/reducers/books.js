import shortid from 'shortid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: shortid.generate(),
    title: 'Frankenstein in Baghdad',
    category: 'Action',
  },
  {
    id: shortid.generate(),
    title: 'Gangster With Determination',
    category: 'Horror',
  },
  {
    id: shortid.generate(),
    title: 'In Search of Lost Time',
    category: 'History',
  },
  {
    id: shortid.generate(),
    title: 'Dune',
    category: 'Sci-Fi',
  },
];

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== payload.id);
    default:
      return state;
  }
};

export default bookReducer;
