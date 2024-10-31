import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
interface SelectedOrder {
  orderby: (order: string) => void;
  selectedOrder: string | null;
}
const SortSelector = ({ orderby, selectedOrder }: SelectedOrder) => {
  const sortOrder = [
    { value: "name", label: "name" },
    { value: "released", label: "released" },
    { value: "-added", label: "added" },
    { value: "created", label: "created" },
    { value: "-rating", label: "rating" },
    { value: "metacritic", label: "metacritic" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {" "}
        Order By :{selectedOrder ? selectedOrder : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => {
              orderby(sort.value);
              // console.log(sort.value);
            }}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
