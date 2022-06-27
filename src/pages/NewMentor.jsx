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

import { Select } from "@chakra-ui/react";

import EmpSidenavDash from "../../src/Components/EmpSidenavDash";

const NewMentor = () => (
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
                <Flex direction="column">
                  <Heading color="#ffffff">Build your profile</Heading>
                  <Flex mt="20px" direction="column">
                    <Text color="#ffffff">
                      It just takes a few minutes to complete the form. We'd
                      love to hear more about your experience and the reasons
                      you want to be a mentor.{" "}
                    </Text>
                    <Flex mt="10px">
                      <Text color="#f0f0f0">
                        By submitting the form, you agree to our Code of Conduct
                        and the Mentor Agreement, so please read them carefully.
                      </Text>
                    </Flex>
                  </Flex>
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
                    Job Title
                  </FormLabel>
                  <Input placeholder="Job Title" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>.</FormLabel>
                  <Input placeholder="Company" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
              </Grid>

              <Flex
                pt="10px"
                flexDirection="column"
                pl="20px"
                pr="20px"
                color="#d2d2d2"
              >
                <Select pl="20px" placeholder="Category">
                  <option value="option1">Engineering & Data</option>
                  <option value="option2">UX & Design</option>
                  <option value="option3">Bussiness & Management</option>
                  <option value="option3">Product & Marketing</option>
                </Select>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    LinkedIn Profile
                  </FormLabel>
                  <Input placeholder="" minHeight="20px" />
                  <FormHelperText>Mandetory</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
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
                    Tags
                  </FormLabel>
                  <Input
                    placeholder="Comma-separated list of your skills"
                    minHeight="60px"
                  />
                  <FormHelperText>Enter upto 5</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Bio
                  </FormLabel>
                  <Input
                    placeholder="Tell us and your mentees a little bit about yourself.
                "
                    minHeight="100px"
                  />
                  <FormHelperText>
                    Limit: 60 words. Please write any information your mentees
                    might need in here. Also mention how you can help mentees
                    with a specific goal.
                  </FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    Why do you want to become a Mentor?
                  </FormLabel>
                  <Input placeholder="" minHeight="80px" />
                  <FormHelperText>This will not be Public</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl p="20px">
                  <FormLabel color="#d2d2d2" fontWeight="bold">
                    What has been your greatest Achievement?
                  </FormLabel>
                  <Input placeholder="" minHeight="80px" />
                  <FormHelperText>This will not be Public</FormHelperText>
                  <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <Flex ml="20px">
                  <Text>
                    {" "}
                    This is it! Ypu made it! Just send off your materials and we
                    will be in touch within a few days.
                  </Text>
                </Flex>
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

export default NewMentor;
