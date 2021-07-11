const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_BOOK_REQUEST":
      return {
        books: [],
        loading: true,
        error: null,
      };

    // Получение новой коллекции
    case "FETCH_BOOKS_SUCCESS":
      return {
        // Reducer - обновляет и выводит список книг и возвращается к BookList
        // Обновлённый спик передается через ф-ию mapStateToProps
        books: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.bookList;
  }
};

export default updateBookList;
