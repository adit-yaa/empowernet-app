import React from "react";
import EmpSidenavDash from "../../src/Components/EmpSidenavDash";

import {
  ChakraProvider,
  Box,
  Avatar,
  Text,
  Flex,
  Tag,
  Heading
} from "@chakra-ui/react";

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview
} from "@chakra-ui/react";

const SingleMentee = () => (
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
      <Flex flexDirection="column" p="30px" pt="60px" backgroundColor="#000000">
        <Box
          minWidth="85vw"
          maxWidth="85vw"
          minHeight="600px"
          backgroundColor="#181e22"
          borderRadius="30px"
          border="5px"
        >
          <Flex
            ml="40px"
            direction="column"
            backgroundColor="#181e22"
            maxWidth="700px"
            overflow="scroll"
            borderRadius="30px"
            border="5px"
            boxShadow="50px"
            p="50px"
            m="30px"
          >
            <Flex mb="20px" direction="column">
              <Heading mt="10px" mb="50px" fontSize="3xl" color="#ffffff">
                Profile
              </Heading>
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg"
              />
            </Flex>
            <Flex>
              <Heading fontSize="md" mt="5px" color="#ffffff">
                Name
              </Heading>
              <Editable
                color="#ffffff"
                ml="20px"
                border="#ffffff"
                defaultValue="FirstName LastName"
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Flex>
            <Flex>
              <Heading fontSize="md" mt="5px" color="#ffffff">
                Location
              </Heading>
              <Editable
                color="#ffffff"
                ml="20px"
                border="#ffffff"
                defaultValue="City, Country"
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Flex>
            <Flex>
              <Heading fontSize="md" mt="5px" color="#ffffff">
                Education
              </Heading>
              <Editable
                color="#ffffff"
                ml="20px"
                border="#ffffff"
                defaultValue="College, Major"
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Flex>
            <Flex>
              <Heading fontSize="md" mt="5px" color="#ffffff">
                Interests
              </Heading>
              <Editable
                color="#ffffff"
                ml="20px"
                border="#ffffff"
                defaultValue="Tag1, Tag2, Tag3, Tag4, Tag5"
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Flex>
            <Flex>
              <Heading fontSize="md" mt="5px" color="#ffffff">
                Bio
              </Heading>
              <Editable
                color="#ffffff"
                ml="20px"
                border="#ffffff"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Flex>
            <Text mt="30px" color="#ffffff">
              Click on the info to edit it{" "}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default SingleMentee;
