import React from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from "../contexts/CartContext"

const Navigation = () => {
		
	return (
		//Here im using the Consumer way of using Context API
		<CartContext.Consumer>
			{data => {
				return (
            <div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{data.cart.length}</span>
			</NavLink>
		</div>

				)
			}}
     
		</CartContext.Consumer>
			
		
		
	);
};

export default Navigation;
