import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//Here im saving whatever is in the cart hook plus
		//im adding to it everytime i call the item parameter which is receiving data
		//from the argument coming from the onClick on the Product.js
		setCart([...cart, item])
		// In the future try to see if you get this conditional statement working so that no same item gets added to 
		//the cart if was already added.
		/*if(item.id !== cart.id){
			setCart([...cart, item])
		} else {
			alert("item is already in the cart, choose another item")
			
		}*/
		};
	  
		const removeItem  = item => {
			const items = cart.filter(items => items.id !==item );
			setCart([...items])
		}
     


	return (
		<ProductContext.Provider value ={{products,addItem }}>
			<CartContext.Provider value ={{cart, removeItem}} >
			<div className="App">
{/*Here ill be using the Consumer way of using Context API to pass data vs props*/}
			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
				/*render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}*/
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
				//render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
			</CartContext.Provider>

		</ProductContext.Provider>
		
	);
}

export default App;
