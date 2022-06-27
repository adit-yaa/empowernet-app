import React from "react";
import { Flex, Avatar, Text, Heading, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MentorDashCard = () => (
  <Flex
    backgroundColor="#A09CDB"
    borderRadius="20px"
    justifyContent="center"
    alignItems="center"
    p="20px"
  >
    <Flex>
      <Avatar name="Muskaan" mr="10px" />
    </Flex>
    <Flex flexDirection="column">
      <Heading size="md" as="h4" color="#000000">
        Muskaan
      </Heading>
      <Text>Entreprenur</Text>
    </Flex>
    <IconButton
      aria-label="icon"
      icon={<ChevronRightIcon />}
      size="md"
      colorScheme="#F1A8AD"
      isRound
      variant="link"
    />
  </Flex>
);

export default MentorDashCard;
