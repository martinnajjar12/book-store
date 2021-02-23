import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
};

export default bookReducer;
