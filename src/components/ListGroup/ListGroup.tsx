import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../Button/Button";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const Li = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = ["New York", "Tokyo", "Japan"];
  return (
    <>
      <Ul>
        {items.map((item, index) => (
          <Li
            active={index === selectedIndex}
            key={item}
            onClick={() => console.log()}
          >
            {item}
          </Li>
        ))}
      </Ul>
      <Button onClick={() => {}}>Button</Button>
    </>
  );
}

export default ListGroup;
