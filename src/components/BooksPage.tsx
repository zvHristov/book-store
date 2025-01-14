import React from 'react';
import { mockData } from '../mockData/mockData';

interface BookIF {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

const BooksPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const filteredBooks = mockData.filter((book: BookIF) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Books Page</h1>
      <section>
        <input 
            type="text" 
            placeholder="Search by title or author" 
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </section>
      <ul>
        {filteredBooks.map((book: BookIF) => (
          <li key={book.id}>
              {book.title} by {book.author} - ${book.price}
              <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksPage