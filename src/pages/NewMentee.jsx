import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Grid,
  Heading,
  FormHelperText,
  Text,
  Checkbox,
  Button,
  Image
} from "@chakra-ui/react";

import EmpSidenavDash from "../../src/Components/EmpSidenavDash";

const NewMentee = () => (
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
      <Box backgroundColor="#181e22" p="50px" overflow="scroll">
        <Flex flexDirection="column">
          <Flex>
            <Flex flexDirection="column">
              <Flex p="40px">
                <Flex>
                  <Heading color="#ffffff">Complete your profile</Heading>
                </Flex>
              </Flex>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} p="20px" pl="40px">
                <FormControl>
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Name
                  </FormLabel>
                  <Input placeholder="First Name" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>.</FormLabel>
                  <Input placeholder="Last Name" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Where are you based?
                  </FormLabel>
                  <Input placeholder="City" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>.</FormLabel>
                  <Input placeholder="Country" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Education Qualification
                  </FormLabel>
                  <Input placeholder="Name of school/ college/ place of work" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>.</FormLabel>
                  <Input placeholder="Domain" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
              </Grid>
              <Flex flexDirection="column" p="20px" color="#d2d2d2">
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Upload profile picture
                  </FormLabel>
                  <Input type="file" id="file" />
                  <FormHelperText></FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Interested Domains
                  </FormLabel>
                  <Input
                    placeholder="eg- Data Science, CS, Statistics"
                    minHeight="60px"
                  />
                  <FormHelperText>Enter upto 5</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Tell us a little bit about yourself
                  </FormLabel>
                  <Input placeholder="Short Description" minHeight="100px" />
                  <FormHelperText>Limit: 60 words</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Goals from Mentorship
                  </FormLabel>
                  <Input
                    placeholder="General/ College preparation/ Job advice/ Project Guidance"
                    minHeight="80px"
                  />
                  <FormHelperText>You can have multiple goals</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>

                <Button
                  variant="solid"
                  size="lg"
                  p="20px"
                  mt="60px"
                  borderRadius="50px"
                  color="#000000"
                >
                  Complete your profile
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="https://www.empowernetmentoring.com/static/media/full-logo.25c1ca5b859ef110278699aa7b6fd2da.svg"
              m="30px"
              maxWidth="1000px"
              maxHeight="100px"
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </ChakraProvider>
);

export default NewMentee;
