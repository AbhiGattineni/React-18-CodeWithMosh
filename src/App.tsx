import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const onChange = () => {
    setGame({ ...game, player: { name: "reddy" } });
  };
  return <button onClick={onChange}>Change Name{game.player.name}</button>;
}

export default App;
