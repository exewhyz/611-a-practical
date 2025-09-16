import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];
function Library() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const handleDelete = (bookId) => {
    const filtered = books.filter((book) => {
      return book.id !== bookId;
    });
    setBooks(filtered);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().trim().includes(searchText.toLowerCase().trim())
      ||
      book.author.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    )
  })

  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Book author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
          <button>Add Book</button>
        </form>
      </div>
      <div className="container">
        <ul>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author}
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No books Available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Library;
