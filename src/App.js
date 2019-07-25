import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext, CartValue } from "./Contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

	const removeItem = itemId => {
		setCart(cart.filter(item => item.id !== itemId));
	}

  return (
    <div className="App">
      {/* Cart Value is the name of our empty object we use. you pass all of the values
      to your provider and can be used by calling const context =useContext(ObjectName);
      This removes the need to go through each part of your app and pass props deeper. 
      Context Allows a state that can be called only when it is needed.
      */}
      <CartValue.Provider value={{cart, removeItem}}>
        <Navigation />
        <Route path="/cart" component={ShoppingCart} />
      </CartValue.Provider>
      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path="/" component={Products} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;