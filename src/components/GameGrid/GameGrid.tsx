import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import { GameQuery } from "../../pages/HomePage";
import { Link } from "react-router-dom";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data?.results.map((game) => (
        <Link to={`/games/${game.slug}`}>
          <Box
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
            }}
          >
            <GameCard key={game.id} game={game} />
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
