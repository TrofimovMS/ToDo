import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { bindActionCreators } from "redux";
// HOC - connect - фун-я, которая создаёт новый компонент
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions/index";
import { compose } from "../../utils";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../../components/error-indicator/error-indicator";
import "./book-list.css";

class BookListContainer extends Component {
  componentDidMount() {
    // // 2.Этап Получаем сервис из контекста, получаем при помощи HOC withBookstoreService
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError,
    // } = this.props;
    this.props.fetchBooks();
  }

  // 5.Этап (после Reducer)
  // Отрисовка компонента происходит на последнем этапе из ReStore
  // Поведение
  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList onAddedToCart={onAddedToCart} books={books} />;
  }
}

// Отображение
const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

// Эта ф-я определяет, какие св-ва получит компонент из Redux
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  // Получаем массив книг или индикаторы загрузки, ошибки
  return {
    books,
    loading,
    error,
  };
};

// Описывает какое действия хочет выполнить компонент
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};
// {
//   booksLoaded,
//   booksRequested,
//   booksError,
// };

export default compose(
  // 1.Этап - Connect оборачитвает booklist в HOC (который подключается к RS)
  // Конфигурация connect 1-Какие данные будет получать из RS
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
