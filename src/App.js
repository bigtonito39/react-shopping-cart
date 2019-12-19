import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//Here im saving whatever is in the cart hook plus
		//im adding to it everytime i call the item parameter which is receiving data
		//from the argument coming from the onClick on the Product.js
		// In the future try to see if you get this conditional statement working so that no same item gets added to 
		//the cart if was already added.
		if(item.id !== cart.id){
			setCart([...cart, item])
		} else {
			alert("item is already in the cart, choose another item")
			
		}

		};
	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
}

export default App;
