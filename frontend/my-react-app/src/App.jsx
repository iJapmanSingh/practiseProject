import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h1>Book Library</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default App;