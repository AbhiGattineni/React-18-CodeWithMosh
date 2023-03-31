import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(["Item 1", "Item 2"]);
  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
