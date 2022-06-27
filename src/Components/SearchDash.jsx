import React from "react";
import {
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

const SearchDash = () => (
  <InputGroup>
    <InputLeftAddon backgroundColor="#2e2f35" color="#ffffff">
      Search
    </InputLeftAddon>
    <Input opacity={0.99} minWidth={100} />
    <InputRightElement mt="-10px">
      <PlusSquareIcon name="email" color="#ffffff" boxSize={6} />
    </InputRightElement>
  </InputGroup>
);

export default SearchDash;
