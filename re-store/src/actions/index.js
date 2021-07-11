const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOK_REQUEST",
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};

// Все книги с определённым id
export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: bookId,
  };
};

// Внутрення ф-ия для компонента
// Внешняя ф-ия для mapDispatchToProps
// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//   dispatch(booksRequested());
//   // 3.Этап Получаем данные
//   bookstoreService
//     .getBooks()
//     .then((data) =>
//       // 4.Этап Вызываем booksloaded - для передачи данных в Store
//       dispatch(booksLoaded(data))
//     )
//     .catch((err) => dispatch(booksError(err)));
// };

// thunkMiddleware
const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  // 3.Этап Получаем данные
  bookstoreService
    .getBooks()
    .then((data) =>
      // 4.Этап Вызываем booksloaded - для передачи данных в Store
      dispatch(booksLoaded(data))
    )
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
