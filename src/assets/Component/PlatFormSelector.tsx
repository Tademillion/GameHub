import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import UsePlatForms, { PlatFormResult } from "./Hooks/UsePlatforms";

interface Props {
  onSelectedGenra: (resulttforms: PlatFormResult) => void;
  selectedPlatform: PlatFormResult | null;
}

const PlatFormSelector = ({ onSelectedGenra, selectedPlatform }: Props) => {
  const { data, error, isLoading } = UsePlatForms();
  {
    if (error) return null;
  }
  {
    if (isLoading) return <Spinner />;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {" "}
        {selectedPlatform?.name ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((result) => (
          <MenuItem
            key={result.id}
            onClick={() => {
              onSelectedGenra(result);
            }}
          >
            {result.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
