import { Text } from "@chakra-ui/react";
interface HeadingProps {
  sortedby: string | null;
  genras: string | null;
}

const GameHeading = ({ sortedby, genras }: HeadingProps) => {
  {
    if (sortedby === null && genras === null)
      return (
        <Text marginLeft={10} fontWeight={"bold"} fontSize={"3xl"}>
          {" "}
          Heading
        </Text>
      );
  }
  return (
    <Text marginLeft={10} fontWeight={"bold"} fontSize={"3xl"}>
      {" "}
      {genras} {sortedby}
    </Text>
  );
};

export default GameHeading;
