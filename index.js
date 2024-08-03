import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// PostgreSQL connection setup using pg.Client
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "library",
    password: "",
    port: 5433,
});
db.connect();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes

// Home route to display the list of books
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books ORDER BY date_added DESC");
    res.render("index", { books: result.rows });
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send("Error retrieving book list");
  }
});

// Route to render the add book form
app.get("/add-book", (req, res) => {
  res.render("add-book");
});

// Route to handle form submission and add a new book
app.post("/add-book", async (req, res) => {
  const { title, author, isbn, oclc, rating, review } = req.body;
  let cover_url;

  if (isbn) {
    cover_url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  } else if (oclc) {
    cover_url = `https://covers.openlibrary.org/b/oclc/${oclc}-L.jpg`;
  }

  try {
    await db.query(
      "INSERT INTO books (title, author, isbn, oclc, cover_url, rating, review) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [title, author, isbn, oclc, cover_url, rating, review]
    );
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting data", error);
    res.status(500).send("Error adding book");
  }
});

// Route to delete a book
app.get("/delete/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    await db.query("DELETE FROM books WHERE id = $1", [bookId]);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting book", error);
    res.status(500).send("Error deleting book");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
