import React from 'react';
import { Box, Heading, List, ListItem, Text, Button } from '@chakra-ui/core';
import { CartItemIF } from '../types';
import { formattedText } from '../common';
interface ShoppingCartProps {
    cartItems: CartItemIF[];
    onSubmit: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, onSubmit }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} position="fixed" right={0} top={0} width="300px" bg="white">
        <Heading size="md">Shopping Cart</Heading>
        <List spacing={3}>
            {cartItems.map(item => (
                <ListItem key={item.id}>
                    <Text>{formattedText(item.title)} - ${item.price}</Text>
                </ListItem>
            ))}
        </List>
        <Text fontWeight="bold" mt={4}>Total: ${totalPrice}</Text>
        <Button
            onClick={onSubmit}
            color={"blue.500"}
            mt={4}
        >Submit</Button>
     </Box>
  )
}

export default ShoppingCart