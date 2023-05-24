import useTrailers from "../hooks/useTrailers";

interface Props {
  slug: number;
}
const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useTrailers(slug);

  if (isLoading) return null;
  if (error || !data) throw error;

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} src={first.data["max"]} controls />
  ) : null;
};

export default GameTrailer;
