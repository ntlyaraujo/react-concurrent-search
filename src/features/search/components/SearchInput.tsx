import { InputGroup, Kbd, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";

type SearchInputProps = {
  onSearch: (value: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <InputGroup flex="1" startElement={<Search />} endElement={<Kbd>⌘K</Kbd>}>
      <Input
        placeholder="Search books"
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
