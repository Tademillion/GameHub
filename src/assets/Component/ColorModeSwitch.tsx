import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Switch
        color={"black"}
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        {" "}
        <Text color={"GrayText"}> Dark Mode</Text>
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
