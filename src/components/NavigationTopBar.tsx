import React  from 'react';
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart';
import { Grid, Box } from "@chakra-ui/core";
import { useCart } from '../hooks/useCart';

const NavigationTopBar: React.FC = () => {

    const { cartItems } = useCart();

    const handlingSubmit = () => {
        console.log(cartItems);
        //reset cart items

    };
    console.log(cartItems, 'cartItems NavigationTopBar')
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