import React from "react";
import { Grid, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";

const EmpMarketingBox = () => (
  <Grid
    templateColumns="repeat(2, 1fr)"
    gap={6}
    column={2}
    row={1}
    minHeight="100%"
    boxShadow="#ffffff"
  >
    <Image
      src="https://uploads-ssl.webflow.com/626986cdbab029753bbcde4d/626986cdbab029229abcde88_paper-plane.png"
      minHeight="100%"
      mb="-60px"
    />
    <Flex flexDirection="column" justifyContent="space-around" p="30px">
      <Heading as="h3" size="lg" color="#ffffff">
        Built for women
      </Heading>
      <Text fontSize="sm" color="#ffffff">
        For their education and career and move towards realising their full
        potential. For their education and career and move towards realising
        their full potential.
      </Text>
      <Button
        variant="outline"
        size="sm"
        borderRadius="20px"
        backgroundColor="#D4F4B3"
        colorScheme="facebook"
      >
        Our Mission
      </Button>
    </Flex>
  </Grid>
);

export default EmpMarketingBox;
