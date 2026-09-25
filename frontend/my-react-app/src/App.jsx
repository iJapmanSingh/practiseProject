import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const addBook = (event) => {
    event.preventDefault();

    const newBook = {
      title,
      author,
      genre,
    };

    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((createdBook) => {
        setBooks((currentBooks) => [...currentBooks, createdBook]);

        setTitle("");
        setAuthor("");
        setGenre("");
      });
  };

  const deleteBook = (id) => {
  fetch(`http://localhost:8080/api/books/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((deletedBook) => {
      setBooks((currentBooks) =>
        currentBooks.filter((book) => book.id !== deletedBook.id)
      );
    });
};

  return (
    <div className="app">
      <h1>📚 Book Library</h1>

      <form className="book-form" onSubmit={addBook}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />

        <button type="submit">Add Book</button>
      </form>

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-icon">📖</div>

            <h2>{book.title}</h2>

            <p className="author">{book.author}</p>

            <span className="genre">{book.genre}</span>

            <button onClick={() => deleteBook(book.id)}>
              Delete
            </button>
          </div>

          
        ))}
      </div>
    </div>
  );
}

export default App;