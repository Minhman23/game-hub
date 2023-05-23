import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) return error;

  return (
    <Box width={500}>
      <Image src={game.background_image} width={"100%"} />
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
