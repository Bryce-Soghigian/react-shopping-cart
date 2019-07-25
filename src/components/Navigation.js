import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { CartValue } from '../Contexts/ProductContext'


const Navigation = () => {
	const context  = useContext(CartValue)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
