import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box>
      <Image src={game.background_image} width={500} />
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <GameAttributes game={game} />
      <GameTrailer slug={game.slug} />
    </Box>
  );
};

export default GameDetailPage;
