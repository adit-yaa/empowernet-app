import React from "react";
import { ChakraProvider, Avatar, Flex, Heading, Text } from "@chakra-ui/react";

const Active_Application = () => (
  <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={4}
      m="30px"
      maxWidth="300px"
      backgroundColor="#181e22"
      borderRadius="20px"
      border="5px"
    >
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        p="20px"
      >
        <Heading as="h6" size="md" color="#f0f0f0">
          You applied to Muskaan
        </Heading>
        <Text fontSize="xs" color="#ffffff">
          May 28, 2022
        </Text>
        <Text color="#f3bf22" fontWeight="bold" pt="20px" pb="20px">
          Awaiting Response
        </Text>
        <Flex>
          <Avatar />
          <Text color="#a7a7a7" p="10px">
            Muskaan
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>
);
export default Active_Application;
