import React,{useContext} from 'react';
import { CartValue} from '../Contexts/ProductContext';

const Item = () => {
	const {removeItem,title,image,price,id} = useContext(CartValue)

	{console.log(removeItem,"hey bipolarbear this is removeItem")}
	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button
				 onClick={() => removeItem(id)}>
				 	Remove from cart
					</button>
			</div>
		</div>
	);
};

export default Item;
