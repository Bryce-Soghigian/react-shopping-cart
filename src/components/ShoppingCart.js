import React,{useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartValue} from '../Contexts/ProductContext';
// line 8 takes the CartValue and brings it in to our function without having to drill props.
const ShoppingCart = () => {
	const context = useContext(CartValue)
	{console.log(context,"console log context")}
	const getCartTotal = () => {
		return context.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{context.cart.map(item => (
				<Item 
				remove = {context.removeItem} 
				key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
