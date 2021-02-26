const initialState = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const filter = (state = initialState, { type, payload }) => {
  if (type === 'CHANGE_FILTER') {
    switch(payload) {
      case 'All':
        return initialState;
      case 'Action':
        return initialState.filter(category => category === 'Action');
      case 'Biography':
        return initialState.filter(category => category === 'Biography');
      case 'History':
        return initialState.filter(category => category === 'History');
      case 'Horror':
        return initialState.filter(category => category === 'Horror');
      case 'Kids':
        return initialState.filter(category => category === 'Kids');
      case 'Learning':
        return initialState.filter(category => category === 'Learning');
      case 'Sci-Fi':
        return initialState.filter(category => category === 'Sci-Fi');
      default:
        return state;
    }
  }
  return state;
}
