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


-- Inserting books into the books table

INSERT INTO books (title, author, isbn, oclc, cover_url, rating, review)
VALUES 
('How to Have a Good Day', 'Caroline Webb', '0553419633', NULL, 'https://covers.openlibrary.org/b/isbn/0553419633-L.jpg', 4, 'A great guide to managing work and life with simple techniques.'),
('The Selfish Gene', 'Richard Dawkins', '0195200004', NULL, 'https://covers.openlibrary.org/b/isbn/0195200004-L.jpg', 5, 'A classic book that provides an insightful look into evolution and gene-centered theory.'),
('The Color of Law', 'Richard Rothstein', '9781631492860', NULL, 'https://covers.openlibrary.org/b/isbn/9781631492860-L.jpg', 5, 'An eye-opening book on the history of segregation in America.'),
('To Kill a Mockingbird', 'Harper Lee', NULL, '465761263', 'https://covers.openlibrary.org/b/oclc/465761263-L.jpg', 5, 'A timeless novel about the moral growth of its young protagonist.'),
('Phantoms in the Brain', 'V. S. Ramachandran', '9780007253890', NULL, 'https://covers.openlibrary.org/b/isbn/9780007253890-L.jpg', 4, 'A fascinating exploration of the mysteries of the human brain.'),
('Creativity Inc.', 'Ed Catmull', '0812993012', NULL, 'https://covers.openlibrary.org/b/isbn/0812993012-L.jpg', 5, 'A must-read for anyone interested in fostering creativity in a corporate setting.'),
('The Woman in Me', 'Britney Spears', '9781668009062', NULL, 'https://covers.openlibrary.org/b/isbn/9781668009062-L.jpg', 3, 'An intimate memoir that sheds light on the life and struggles of the pop icon.');
