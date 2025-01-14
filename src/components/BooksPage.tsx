import React from 'react';
import { mockData } from '../mockData/mockData';
import { formattedText } from '../common';
import { BookIF } from '../common/types';
import { useCart } from '../hooks/useCart';
import { 
    List, 
    ListItem, 
    ListIcon,
    Grid,
    Button,
    Input,
    Flex
 } from "@chakra-ui/core";

const BooksPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const filteredBooks = mockData.filter((book: BookIF) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    const { addToCart } = useCart();

  return (
    <Grid gridRow="1/2" gap={2} className='container'>
      <h1>Books Page</h1>
      <Input 
            type="search" 
            placeholder="Search by title or author" 
            onChange={(e) => setSearchTerm(e.target.value)}
            size="md"
        />
      <List spacing={8}>
        {filteredBooks.map((book: BookIF) => (
        <Flex 
            key={book.id} 
            flexWrap="wrap" 
            alignContent={"center"}
        >
            <ListItem key={book.id}>
                <ListIcon icon="check-circle" color="green.500" />
                {formattedText(book.title)} by {formattedText(book.author)} - ${book.price}
                <Button
                    onClick={() => addToCart(book)}
                    color={"blue.500"}
                    size='sm'
                >Add to Cart</Button>
            </ListItem>
        </Flex>
        ))}
      </List>
    </Grid>
  )
}

export default BooksPage