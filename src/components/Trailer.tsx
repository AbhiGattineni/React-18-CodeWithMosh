import useTrailer from "../hooks/useTrailer";

interface Props {
  id: number;
}
const Trailer = ({ id }: Props) => {
  const { data: trailer, error, isLoading } = useTrailer(id);
  if (isLoading) return <div>Loading...</div>;
  if (error || !trailer) throw error;

  const first = trailer?.results[0];
  return first ? (
    <video
      src={trailer?.results[0].data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default Trailer;
