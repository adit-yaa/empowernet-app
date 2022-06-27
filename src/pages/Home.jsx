import React from "react";
import { ChakraProvider, Flex, Heading, Box, Grid } from "@chakra-ui/react";

import EmpSidenavDash from "../../src/Components/EmpSidenavDash";
import EmpMarketingBox from "../../src/Components/EmpMarketingBox";
import SearchDash from "../../src/Components/SearchDash";
import MentorDashCard from "../../src/Components/MentorDashCard";
import UpcomingEventCard from "../../src/Components/UpcomingEventCard";
import Calendar from "../../src/Components/Calendar";
import TaskList from "../../src/Components/TaskList";
import LearningPieChart from "../../src/Components/LearningPieChart";
import Feedback from "../../src/Components/Feedback";
import Graph from "../../src/Components/Graph";
import Active_Application from "../Components/ActiveApplication";

const Home = () => (
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
      <Flex
        width="55%"
        flexDirection="column"
        overflow="scroll"
        minHeight="100vh"
        backgroundColor="#161819"
      >
        <Flex m="30 px" p="30px" alignItems="flex-start" flexDirection="column">
          <Heading as="h5" fontSize="3xl" letterSpacing="tight" color="#ffffff">
            Hi Moose,
          </Heading>
          <Heading
            fontWeight="bold"
            as="h1"
            fontSize="5xl"
            size="lg"
            p="5px"
            color="#ffffff"
          >
            {" "}
            What will you learn today?
          </Heading>
        </Flex>
        <Box
          maxWidth="90%"
          backgroundColor="#F1A8AD"
          maxHeight="400px"
          minHeight="40%"
          ml="30px"
          borderRadius="20px"
        >
          <EmpMarketingBox />
        </Box>
        <Flex flexDirection="column">
          <Heading size="md" as="h4" color="#bfbcda" m="10px" mt="50px">
            Calendar
          </Heading>
          <Calendar />
        </Flex>
      </Flex>

      <Flex
        width="35%"
        backgroundColor="#161819"
        p="3%"
        flexDirection="column"
        overflow="scroll"
      >
        <Flex flexDirection="column">
          <Flex>
            <Heading
              as="h4"
              size="md"
              color="#bfbcda"
              pt="45px"
              pb="10px"
              pl="10px"
            >
              Mentors
            </Heading>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <MentorDashCard />
            <MentorDashCard />
            <MentorDashCard />
            <MentorDashCard />
          </Grid>
        </Flex>
        <Flex flexDirection="column">
          <Heading size="md" as="h4" color="#bfbcda" p="10px">
            Upcoming events
          </Heading>
          <Grid templateColumns="repeat(1, 1fr)" gap={6}>
            <UpcomingEventCard />
            <UpcomingEventCard />
          </Grid>
        </Flex>

        <Flex flexDirection="column">
          <Feedback />
          <Active_Application />
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default Home;
