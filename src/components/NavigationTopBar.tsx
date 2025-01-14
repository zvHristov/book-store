import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart';
import { Grid, Box } from "@chakra-ui/core";

const NavigationTopBar: React.FC = () => {
    const [cartItems, setCartItems] = useState<{
        id: number;
        title: string;
        author: string;
        price: number;
        stock: number;
      }[]>([]);
    
      const handlingAddToCart = (book: {
        id: number;
        title: string;
        author: string;
        price: number;
        stock: number;
      }) => {
        const newCartItems = [...cartItems, book];
        setCartItems(newCartItems);
      };
    
      const handlingSubmit = () => {
        console.log(cartItems);
        //reset cart items
        setCartItems([]);
      };
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box>
            <Link to="/">Books</Link>
        </Box>
        <Box>
            <Link to="/about">User Profile</Link>
        </Box>
        <ShoppingCart cartItems={cartItems} onSubmit={handlingSubmit} />
    </Grid>
  )
}

export default NavigationTopBar