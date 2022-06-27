import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
  Input
} from "@chakra-ui/react";

const Feedback = () => (
  <FormControl
    color="#c2c2c2"
    backgroundColor="#202427"
    p="30px"
    borderRadius="20px"
    mt="40px"
  >
    <FormLabel fontWeight="bold" color="#bfbcda">
      Feedback
    </FormLabel>
    <Input minHeight="100px" backgroundColor="#111111" />
    <FormHelperText>
      We are building something valuable, please give us feedback to make it
      better.
    </FormHelperText>
    <FormErrorMessage>Error message</FormErrorMessage>
    <Button variant="outline" size="md" p="10px" mt="20px">
      Send
    </Button>
  </FormControl>
);

export default Feedback;
