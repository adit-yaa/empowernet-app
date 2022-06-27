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

const CompleteProfile = () => (
  <ChakraProvider resetCSS>
    <Box
      backgroundColor="#ffffff"
      maxWidth="60vw"
      overflow="scroll"
      borderRadius="30px"
      border="5px"
      boxShadow="50px"
      p="50px"
    >
      <Flex flexDirection="column">
        <Flex>
          <Flex flexDirection="column">
            <Flex p="40px">
              <Flex>
                <Heading>Complete your profile</Heading>
              </Flex>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} p="20px" pl="40px">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="First Name" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>.</FormLabel>
                <Input placeholder="Last Name" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Where are you based?</FormLabel>
                <Input placeholder="City" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>.</FormLabel>
                <Input placeholder="Country" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Education Qualification</FormLabel>
                <Input placeholder="Name of school/ college/ place of work" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>.</FormLabel>
                <Input placeholder="Domain" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
            </Grid>
            <Flex flexDirection="column" p="20px">
              <FormControl p="20px">
                <FormLabel>Interested Domains</FormLabel>
                <Input
                  placeholder="eg- Data Science, CS, Statistics"
                  minHeight="60px"
                />
                <FormHelperText>Enter upto 5</FormHelperText>
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl p="20px">
                <FormLabel>Tell us a little bit about yourself</FormLabel>
                <Input placeholder="Short Description" minHeight="100px" />
                <FormHelperText>Limit: 60 words</FormHelperText>
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl p="20px">
                <FormLabel>
                  What are you hoping to achieve from mentorship? How can
                  mentors help?
                </FormLabel>
                <Input
                  placeholder="General/ College preparation/ Job advice/ Project Guidance"
                  minHeight="80px"
                />
                <FormHelperText>You can have multiple goals</FormHelperText>
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <Flex flexDirection="column" p="20px" pt="40px" pb="40px">
                <Heading as="h4" size="md">
                  Expectations
                </Heading>
                <Text pt="10px">
                  We want to make sure that your mentorship with mentors is
                  going to be as smooth as possible. To ensure that, we'd love
                  to know what you're expecting.
                </Text>
                <Text pt="30px">
                  As a reminder:- Mentors can be located in different country.
                  Mind the timezone differences.-Mentor will provide a
                  persistent chat connection to regularly communicate   with
                  you.-Mentor will declare their availability for regularly
                  scheduled 1-on-1 calls.- A friendly profile picture, complete
                  profile, well defined interests gives you 2X the chance for
                  your   mentor to accept you for mentoring.
                </Text>
              </Flex>
              <Checkbox isReadOnly>Label checkbox</Checkbox>
              <Button
                variant="solid"
                size="lg"
                p="20px"
                mt="60px"
                borderRadius="50px"
              >
                Submit
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
  </ChakraProvider>
);

export default CompleteProfile;
