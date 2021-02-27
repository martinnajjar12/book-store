const initialState = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const filter = (state = initialState, { type, payload }) => {
  if (type === 'CHANGE_FILTER') {
    switch (payload) {
      case 'All':
        return initialState;
      case 'Action':
        return 'Action';
      case 'Biography':
        return 'Biography';
      case 'History':
        return 'History';
      case 'Horror':
        return 'Horror';
      case 'Kids':
        return 'Kids';
      case 'Learning':
        return 'Learning';
      case 'Sci-Fi':
        return 'Sci-Fi';
      default:
        return state;
    }
  }
  return state;
};

export default filter;
