import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GenraResultForms } from "../Genres/UseGeanras";
import GameCards from "./GameCards";
import useGames from "./Hooks/UseGames";
import { PlatFormResult } from "./Hooks/UsePlatforms";
interface Props {
  SelectedGenra: GenraResultForms | null;
  selectedPlatForms: PlatFormResult | null;
  selectedOrder: string | null;
  SearchInput: string | null;
}

const GameGrid = ({
  SelectedGenra,
  selectedPlatForms,
  selectedOrder,
  SearchInput,
}: Props) => {
  const { data, error, isLoading } = useGames(
    SelectedGenra,
    selectedPlatForms,
    selectedOrder,
    SearchInput
  ); // know as custom hook
  //   axios or use as optionl
  //   .get<GameProps>(
  //     "https://api.rawg.io/api/games?key=fa673e4ccb444e1aaf73df4b275c44de"
  //   )\
  {
    if (data === null) return <Text> the iteme yoo found is not exist</Text>;
  }
  {
    if (error) return <Text> {error}</Text>;
  }
  {
    if (isLoading) return <Spinner />;
  }
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing="20px" overflow={"hidden"}>
        {data.map((d) => (
          <GameCards game={d} key={d.id} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
