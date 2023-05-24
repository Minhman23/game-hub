import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  slug: number;
}

const GameScreenshot = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug);

  if (isLoading) return null;
  if (error || !data) throw error;

  return (
    <SimpleGrid marginY={5} columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((file) => (
        <Image
          borderRadius={5}
          overflow={"hidden"}
          key={file.id}
          src={file.image}
          objectFit={"fill"}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
