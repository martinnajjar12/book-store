const filter = (state = 'All', { type, payload }) => {
  if (type === 'CHANGE_FILTER') {
    switch (payload) {
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
