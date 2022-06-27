import React from "react";
import { Flex, Avatar, Text, Heading, Button } from "@chakra-ui/react";

const UpcomingEventCard = () => (
  <Flex
    backgroundColor="#D27581"
    borderRadius="20px"
    justifyContent="space-between"
    flexDirection="row"
    alignItems="center"
  >
    <Flex flexDirection="row">
      <Avatar
        m="15px"
        name="Muskaan"
        src="https://uploads-ssl.webflow.com/626986cdbab029753bbcde4d/626a82292a41794f996559f8_IMG_8278.png"
        size="lg"
      />
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Heading as="h5" size="md">
          27 March
        </Heading>
        <Text fontWeight="bold" color="#D4F4B3">
          8:00 PM
        </Text>
        <Text color="#ffffff" fontWeight="bold">
          Muskaan
        </Text>
      </Flex>
    </Flex>
    <Flex>
      <Button
        variant="outline"
        size="md"
        mr="15px"
        colorScheme="whiteAlpha"
        backgroundColor="#D4F4B3"
        color="#000000"
      >
        Join call
      </Button>
    </Flex>
  </Flex>
);

export default UpcomingEventCard;
