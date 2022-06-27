import React from "react";
import EmpSidenavDash from "../../src/Components/EmpSidenavDash";

import { ChakraProvider, Flex, Heading, Box, Grid } from "@chakra-ui/react";

const List = () => (
  <ChakraProvider resetCSS>
    <Flex
      flexDirection="row"
      height="100vh"
      overflow="hidden"
      maxWidth="2000px"
    >
      <Flex
        flexDirection="column"
        width="15%"
        alignItems="center"
        backgroundColor="#202427"
        color="whiteAlpha.500"
        height="100vh"
      >
        <EmpSidenavDash />
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default List;
