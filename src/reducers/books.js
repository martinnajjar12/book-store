import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: 100 * Math.random(),
    title: 'Frankenstein in Baghdad',
    category: 'Action',
  },
  {
    id: 100 * Math.random(),
    title: 'Gangster With Determination',
    category: 'Horror',
  },
  {
    id: 100 * Math.random(),
    title: 'In Search of Lost Time',
    category: 'History',
  },
  {
    id: 100 * Math.random(),
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
