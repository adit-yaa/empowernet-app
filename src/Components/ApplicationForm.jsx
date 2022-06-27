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

const Application_Form = () => (
  <ChakraProvider resetCSS>
    <Box
      backgroundColor="#181e22"
      maxWidth="700px"
      overflow="scroll"
      borderRadius="30px"
      border="5px"
      boxShadow="50px"
      p="50px"
      m="30px"
      height="80vh"
    >
      <Flex flexDirection="column">
        <Flex>
          <Flex flexDirection="column">
            <Flex p="40px">
              <Flex>
                <Heading color="#ffffff">Apply for mentorship</Heading>
              </Flex>
            </Flex>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={6}
              p="20px"
              pl="40px"
            ></Grid>
            <Flex flexDirection="column" p="20px" color="#d2d2d2">
              <FormControl p="20px">
                <FormLabel color="#d2d2d2" fontWeight="bold">
                  What are you interested in?
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
                  What goal would you like to reach and what steps did you take
                  so far to get there?
                </FormLabel>
                <Input
                  placeholder="Short Description and talk about your situation"
                  minHeight="100px"
                />
                <FormHelperText>Limit: 60 words</FormHelperText>
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
              <FormControl p="20px">
                <FormLabel color="#d2d2d2" fontWeight="bold">
                  What are you hoping to achieve from this mentorship? How can
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
                <Heading as="h4" size="md" color="#d2d2d2" fontWeight="bold">
                  Expectations
                </Heading>
                <Text pt="10px" color="#d2d2d2">
                  We want to make sure that your mentorship with mentors is
                  going to be as smooth as possible. To ensure that, we'd love
                  to know what you're expecting.
                </Text>
                <Text pt="30px" color="#d2d2d2">
                  As a reminder:- Mentors can be located in different country.
                  Mind the timezone differences.-Mentor will provide a
                  persistent chat connection to regularly communicate   with
                  you.-Mentor will declare their availability for regularly
                  scheduled 1-on-1 calls.- A friendly profile picture, complete
                  profile, well defined interests gives you 2X the chance for
                  your   mentor to accept you for mentoring.
                </Text>
              </Flex>
              <Checkbox isReadOnly>I agree to the expectations</Checkbox>
              <Button
                variant="solid"
                size="lg"
                p="20px"
                mt="60px"
                borderRadius="50px"
                color="#000000"
              >
                Submit your application
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

export default Application_Form;
