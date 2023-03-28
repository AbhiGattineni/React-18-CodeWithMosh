function ListGroup() {
  const items = ["New York", "Tokyo", "Japan"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item}
          onClick={() => console.log()}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
