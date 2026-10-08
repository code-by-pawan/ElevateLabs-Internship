const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const books = [
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear'
  }
];

const getNextBookId = () => {
  const lastBook = books[books.length - 1];
  return lastBook ? lastBook.id + 1 : 1;
};

const validateBookInput = (title, author) => {
  return (
    typeof title === 'string' &&
    title.trim() !== '' &&
    typeof author === 'string' &&
    author.trim() !== ''
  );
};

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Book Management API'
  });
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);

  if (Number.isNaN(bookId)) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }

  const book = books.find((item) => item.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json(book);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!validateBookInput(title, author)) {
    return res.status(400).json({
      message: 'Title and author are required'
    });
  }

  const newBook = {
    id: getNextBookId(),
    title: title.trim(),
    author: author.trim()
  };

  books.push(newBook);

  return res.status(201).json({
    message: 'Book created successfully',
    book: newBook
  });
});

app.put('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);

  if (Number.isNaN(bookId)) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { title, author } = req.body;

  if (!validateBookInput(title, author)) {
    return res.status(400).json({
      message: 'Title and author are required'
    });
  }

  books[bookIndex] = {
    ...books[bookIndex],
    title: title.trim(),
    author: author.trim()
  };

  return res.status(200).json({
    message: 'Book updated successfully',
    book: books[bookIndex]
  });
});

app.delete('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);

  if (Number.isNaN(bookId)) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(bookIndex, 1);

  return res.status(200).json({
    message: 'Book deleted successfully'
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

app.listen(port, () => {
  console.log(`Book Management API running on http://localhost:${port}`);
});
