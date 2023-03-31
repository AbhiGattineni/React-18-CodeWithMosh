interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return <div>{cartItemsCount}</div>;
};
export default Navbar;
