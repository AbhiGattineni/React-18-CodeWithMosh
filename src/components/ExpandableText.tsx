import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const length = 300;

  if (!text) return null;

  if (text.length <= length) return <div>{text}</div>;

  let truncatedText = expanded ? text : text.substr(0, length);

  return (
    <div>
      {truncatedText}
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
