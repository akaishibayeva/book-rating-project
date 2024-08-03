# book-rating-project
# My Book Collection

This project is a web application that allows users to manage their personal book collection. Users can add new books, view details of the books they have read, edit existing entries, and delete books from their collection. The application fetches book covers from the Open Library Covers API and uses a PostgreSQL database to store the data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete book entries.
- **API Integration**: Fetch book covers from the Open Library Covers API using ISBN or OCLC.
- **Sorting**: Sort books by rating and recency.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Error Handling**: Basic error handling to manage API and database errors.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web application framework for Node.js.
- **PostgreSQL**: Relational database management system.
- **EJS**: Templating engine for rendering HTML.
- **CSS**: Styling for the frontend.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/my-book-collection.git
    cd my-book-collection
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up PostgreSQL database**:
   - Create a PostgreSQL database (e.g., `my_books_db`).
   - Run the SQL script provided in `queries.sql` to create the `books` table.

4. **Configure database connection**:
   - Open `index.js` and update the PostgreSQL connection details with your own:
     ```javascript
     const db = new pg.Client({
       user: "your_username",
       host: "localhost",
       database: "your_database",
       password: "your_password",
       port: 5432,
     });
     ```

5. **Start the application**:
    ```bash
    npm start
    ```

6. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Add a Book**: Click on the "Add New Book" button on the homepage to add a new book to your collection.
- **Edit a Book**: Click the "Edit" button on any book entry to modify its details.
- **Delete a Book**: Click the "Delete" button to remove a book from your collection.
- **View Collection**: The homepage displays a list of all books in your collection, with sorting options available.

## Project Structure

```plaintext
project/
├── public/
│   ├── styles/
│   │   └── main.css
│   ├── assets/
│   │   └── images/
├── views/
│   ├── index.ejs
│   ├── add-book.ejs
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
├── index.js
└── package.json
└── queries.sql
```

## Project Structure

- **`public/`**: Contains static files like CSS and images.
- **`views/`**: Contains EJS templates for rendering the frontend.
- **`index.js`**: Main server file that handles routing and database operations.
- **`queries.sql`**: SQL script to set up the database schema.

## API Integration

This project uses the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) to fetch book covers. The API requires either the ISBN or OCLC number to retrieve the book cover image.

### Example API request:

```javascript
https://covers.openlibrary.org/b/isbn/0385472579-L.jpg
```
## Database Schema:

The PostgreSQL database schema includes a single books table with the following fields:

```
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    isbn VARCHAR(13),
    oclc VARCHAR(20),
    cover_url TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contributing:
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.


