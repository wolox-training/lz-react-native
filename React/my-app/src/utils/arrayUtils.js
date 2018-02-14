export const bookAvailable = books => {
  return books.every(book => book.returned_at);
};

export const userHasTheBook = books => {
  return books.some(book => book.user.id === window.localStorage.userId);
};
