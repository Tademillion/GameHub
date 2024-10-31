import { HStack, Image } from "@chakra-ui/react";
import Logo from "../Logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  serachText: (data: string) => void;
}

const Components = ({ serachText }: Props) => {
  // const [searchvalue, setsearchvalue] = useState<string | null>(null);
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={Logo} alt="the image is not found" boxSize="100px" />
      {/* <Text> Eastern Star</Text> */}
      <SearchInput Searchinputs={serachText} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Components;
