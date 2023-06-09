import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatFormIconList from "../PlatFormIconList/PlatFormIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import noImage from "../../assets/no-image-placeholder-6f3882e0.webp";
import Emoji from "../Emoji/Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image || noImage} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
