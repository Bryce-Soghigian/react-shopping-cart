import React,{useContext} from 'react';
import { CartValue } from '../Contexts/ProductContext';

const Item = props => {
	const context = useContext(CartValue)
	return (
		<div className="shopping-cart_item">
			<img src={context.image} alt={`${context.title} book`} />


			<div>
				<h1>{context.title}</h1>
				<p>$ {context.price}</p>
				<button
				
				>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
