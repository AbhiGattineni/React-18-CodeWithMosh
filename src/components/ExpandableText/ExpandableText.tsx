interface Props {
  children: String;
}

const ExpandableText = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ExpandableText;
