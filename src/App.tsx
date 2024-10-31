import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import Components from "./assets/Component/Components";
import GameGrid from "./assets/Component/GameGrid";
import { GenraResultForms } from "./assets/Component/Hooks/UseGeanras";
import { PlatFormResult } from "./assets/Component/Hooks/UsePlatforms";
import PlatFormSelector from "./assets/Component/PlatFormSelector";
// import SearchInput from "./assets/Component/SearchInput";
import GameHeading from "./assets/Component/GameHeading";
import SortSelector from "./assets/Component/SortSelector";
import GenrasList from "./assets/Genres/GenrasList";
function App() {
  const [selectedGnra, setSelectedGenra] = useState<GenraResultForms | null>(
    null
  );
  const [selectorderby, setseletectedOrder] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] =
    useState<PlatFormResult | null>(null);
  const [order, setorder] = useState<string | null>(null);
  const [searchvalue, setsearchvalue] = useState<string | null>(null);
  return (
    <>
      <div className="div">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`, // it means larger than 1024px
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px ,1fr",
          }}
        >
          {/* templateAreas define the layout of the grid አቀማመጥ */}
          {/* The first row has the nav area spanning two columns.
        The second row has the aside area in the first column and the main area in the second column. */}
          <GridItem area={"nav"}>
            <Components
              serachText={(data) => {
                setsearchvalue(data);
              }}
            />
          </GridItem>
          {/* we have to render in the show tag in order to  change the visibilty of the component when above or below some size */}
          <Show above="lg">
            <GridItem area={"aside"} padding={10}>
              <GenrasList
                onSelectedGenra={(data) => {
                  setSelectedGenra(data);
                }}
                selectedGenra={selectedGnra}
              />
            </GridItem>
          </Show>
          <GridItem area={"main"}>
            <GameHeading
              genras={selectedGnra?.name ? selectedGnra?.name : null}
              sortedby={
                selectedPlatforms?.name ? selectedPlatforms?.name : null
              }
            />
            {/* <HStack spacing={5} marginBottom={5}>
              <PlatFormSelector
                selectedPlatform={selectedPlatforms}
                onSelectedGenra={(data) => {
                  setSelectedPlatforms(data);
                }}
              />

              <SortSelector
                orderby={(data) => {
                  setseletectedOrder(data);
                  setorder(data);
                }}
                selectedOrder={order}
              />
            </HStack> */}
            {/* we can  use eihter */}
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatFormSelector
                  selectedPlatform={selectedPlatforms}
                  onSelectedGenra={(data) => {
                    setSelectedPlatforms(data);
                  }}
                />
              </Box>

              <Box marginRight={5}>
                <SortSelector
                  orderby={(data) => {
                    setseletectedOrder(data);
                    setorder(data);
                  }}
                  selectedOrder={order}
                />
              </Box>
              {
                /* <SearchInput Searchinputs={(data) => setsearchvalue(data)} />
                 */
                //  the data is passed from one component to other children and children is passed the data to the appcomponent
              }
            </Flex>
            <GameGrid
              SelectedGenra={selectedGnra}
              selectedPlatForms={selectedPlatforms}
              selectedOrder={selectorderby}
              SearchInput={searchvalue}
            />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}
export default App;
