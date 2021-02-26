export const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export const CHANGE_FILTER = () => ({
  type: 'CHANGE_FILTER',
});
