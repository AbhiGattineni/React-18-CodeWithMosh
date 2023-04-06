import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });
  const [expenses, setExpense] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 10, category: "utilities" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "utilities" },
  ]);

  // const onChange = () => {
  //   setGame({ ...game, player: { name: "reddy" } });
  // };
  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
    />
  );
}

export default App;
