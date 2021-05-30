import React, { createContext, useState } from 'react';
import uuid from "react-uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Cant hurt me', author: 'David goggins', id: 1},
    {title: 'The power of subconcious mind', author: 'Joseph Murphy', id: 2}
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;