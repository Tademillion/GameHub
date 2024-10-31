import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { ResultForm } from "./Hooks/UseGames";
interface GameCardsProps {
  game: ResultForm;
}

const GameCards = ({ game }: GameCardsProps) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} key={game.id}></Image>
        <CardBody>
          <Heading fontSize={"2xs"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
