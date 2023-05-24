import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

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
    </Box>
  );
};

export default GameDetailPage;
