import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
interface SearchProps {
  Searchinputs: (input: string) => void;
}

const SearchInput = ({ Searchinputs }: SearchProps) => {
  const SearchText = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (SearchText.current) Searchinputs(SearchText.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<Icon name="search" />} />
        <Input
          borderRadius={20}
          marginRight={100}
          variant={"filled"}
          placeholder="serach game "
          className="form-control"
          ref={SearchText}
          onChange={() => {
            // Searchinputs(event.target.value);
          }}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
