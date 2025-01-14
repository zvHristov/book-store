import React from 'react';
interface CartItemIF {
    id: number;
    title: string;
    price: number;
}

interface ShoppingCartProps {
    cartItems: CartItemIF[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="cart">
        <h2>Shopping Cart</h2>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>{item.title} - ${item.price}</li>
            ))}
        </ul>
        <p>Total: ${totalPrice}</p>
        <button>Submit</button>
     </aside>
  )
}

export default ShoppingCart