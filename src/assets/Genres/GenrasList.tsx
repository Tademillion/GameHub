import {
  Button,
  HStack,
  Image,
  List,
  Text,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { GenraResultForms } from "./UseGeanras";
interface Props {
  onSelectedGenra: (genra: GenraResultForms) => void;
  selectedGenra: GenraResultForms | null;
}

const GenrasList = ({ selectedGenra, onSelectedGenra }: Props) => {
  const { genra, error, isLoading } = useGenres();
  {
    if (isLoading) return <Spinner />;
  }
  {
    if (error) return <Text> {error}</Text>;
  }
  return (
    <>
      <List>
        {genra.map((data) => (
          <ListItem fontSize={"2xl"} key={data.id}>
            <HStack spacing={"1px"}>
              <Image
                src={data.image_background}
                boxSize={"35px"}
                borderRadius={8}
              />{" "}
              <Button
                fontWeight={selectedGenra?.id === data.id ? "bold" : ""}
                variant={"link"}
                fontSize={"lg"}
                onClick={() => {
                  onSelectedGenra(data);
                  // console.log(data); if we log it does not work
                }}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenrasList;
