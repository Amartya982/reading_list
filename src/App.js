  
import React from 'react';
import BookList from './component/BookList';
import Navbar from './component/Navbar';
import BookContextProvider from './contexts/BookContext';



function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar />
      <BookList />
      </BookContextProvider>
      </div>

  );
}

export default App;
