import React from 'react';
import { Box, Heading, List, ListItem, Text, Button } from '@chakra-ui/core';

interface CartItemIF {
    id: number;
    title: string;
    price: number;
}

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
                    <Text>{item.title} - ${item.price}</Text>
                </ListItem>
            ))}
        </List>
        <Text fontWeight="bold" mt={4}>Total: ${totalPrice}</Text>
        <Button
            onClick={onSubmit}
            colorScheme="blue"
            mt={4}
        >Submit</Button>
     </Box>
  )
}

export default ShoppingCart