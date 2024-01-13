import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <div>Loading...</div>;

  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
    </div>
  );
};

export default GameDetailPage;
