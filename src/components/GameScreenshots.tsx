import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenShots(id);
  if (isLoading) return <div>Loading...</div>;
  if (error || !screenshots) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
