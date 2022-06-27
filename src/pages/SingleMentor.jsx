import React from "react";
import EmpSidenavDash from "../../src/Components/EmpSidenavDash";

import {
  ChakraProvider,
  Box,
  Image,
  Stack,
  Text,
  Flex,
  Tag,
  Heading,
  Button
} from "@chakra-ui/react";

const SingleMentor = () => (
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
          <Stack spacing={2} flexDirection="row">
            <Flex flexDirection="column" alignItems="center">
              <Flex
                justifyContent="center"
                minWidth="300px"
                pt="30px"
                pr="-10px"
              >
                <Image
                  width="200px"
                  src="https://uploads-ssl.webflow.com/626986cdbab029753bbcde4d/626a82292a41794f996559f8_IMG_8278.png"
                />
              </Flex>
            </Flex>
            <Flex flexDirection="column" p="30px">
              <Flex pl="10px">
                <Heading color="#ffffff" fontSize="3xl">
                  Muskaan
                </Heading>
                <Flex>
                  <Text fontSize="lg" ml="20px">
                    🇮🇳
                  </Text>
                </Flex>
              </Flex>
              <Flex flexDirection="column" p="10px">
                <Heading as="h3" size="md" color="#ffffff">
                  Founder and Product Designer{" "}
                </Heading>
                <Heading as="h5" size="sm" color="#b0b0b0" mt="7px">
                  Empowernet{" "}
                </Heading>
              </Flex>
              <Flex p="10px" flexDirection="column">
                <Flex>
                  <Image
                    height="30px"
                    width="30px"
                    src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                  />
                  <Image
                    height="30px"
                    width="30px0px"
                    src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                  />
                  <Image
                    height="30px"
                    width="30px"
                    src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                  />
                  <Image
                    height="30px"
                    width="30px"
                    src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                  />
                </Flex>
                <Flex>
                  <Flex pt="10px">
                    <Flex justifyContent="center">
                      <Image
                        height="30px"
                        width="30px"
                        src="data:image/png;base64,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"
                      />
                      <Heading color="#b5b5b5" as="h5" size="sm" p="10px">
                        Chat
                      </Heading>
                    </Flex>
                    <Flex justifyContent="center" ml="10px">
                      <Image
                        height="30px"
                        width="30px"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///+rq6tubm7T09OFhYWYmJgyMjLBwcFGRkavr6+fn5/5+fny8vIlJSWTk5NlZWXs7Ozb29tbW1tnZ2e7u7vh4eHn5+d/f39LS0vJyclsbGy0tLQYGBjHx8cODg45OTk1NTVTU1MjIyMTExN5eXlAQECDg4MbGxucnxO4AAAEcUlEQVR4nO2d63aqMBBGUxBBEEG5FNAqtQX7/k947Kl1iXIJJErGfvtnZQ3sBpgEkoExAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKRZ5GkQrovE8BxtY1lWNjlifRPZtq05juN5nnE4FIW+Dv0gnb0v3sY5Uj8Juff8WYZHoU0WL5fufP7Sj/ncdZfL1XbjeEZY7u7pdImxPO7bXXdstQgMLVr1VerAnUSaFyzu6+e/nvaWN2yQB8Zm8tp6oMLEmV3szbv4mdZ5L5uaX3Xn3m4XzF+3ni/7zPUuzjq3GnyXREvJ5ySXZqyF8vzyVSX4xeWQao9ruhomhpxL07mK+3sdlM6oej9MEuHzdR9fB83//31m1e1wBNypmKB2G7Js+PtouPpwP39ZEzA93jxvGnZctIF+i6g23J4tFLgAqziDBBO3Plqg1Cl6IhjQgFlTMF9Fw/6XotGcxZ/CcLZqCfYMhtc5vkpI3nDfcafUiRu+2d3BSBvqdTn+OhhhwwVPZ/NA2PDQkOOrGGQN8wlfMLKGHu9Inahha46vQtOwPcdXoWjo9xru0TP87MzxVcgZht05vsqUliFXjq9Cy7BpHN8GJUOzcRzfBiHDlnF8G2QMZ5ydtBuoGHJ30m6gYVgObcAXIoZTkWCO+oapQAO+fD9CV91w+BX4g+qGb1vRYIobmuIvVRQ3lPBeU23DVEIwtQ2F0sQJtQ0HdbWvUNtQxttptQ37jufrUNpwJ2P2ktKGXzKCKW34ISOY0oamjGAwHIVfw1xGMKUNZzKCwXAUYNgLGI4CDHuhtOG7jGBKGz5/nwaGXMBwFP6O4fOPgJ//KcbzG+Is5UJpw08ZwWA4Cn/HkD39U302YKLeDWobPv27JyZj8afahvwz8ptR21B4Ms2L6oaJhGBqG35KeJGvtiHzxYMpbsgM4WCqG7JU9ERV3pDt+ixyqkF9w2MzCqVFCoZis2hpGA5fi0DGUKAZyRiyfOBERQJz9c8MWddFZL3FL2Z9jZ12SBkyFvZvRmKGjPVcI0vQkAU9u3H0DPutVadp2K8bR9KwV/73aBqykjv/k1uPfybhbEa6huyDb1EUYUOuGkrEDTnqYFE3POb/zgf/1A278z99w67xf0HfsOOhKul6bWfaaoLo/Ycj96erVHwNRePA0WfBI4+di2xIReiPpvG/L+Xth1RWAz+lUFsn+b8he1eqVLI1zO+b2lvKT8negzLVkldC5ef3NQPH/ek3Xay8hiQy4fL6t+vb0/NvpidjXoAAsSfjUxA3BSPLy193SSRjjs4A3Ei8pP4vRXXgePNvKxM7fqimu7KLsu5IB1MZOM6/6jb5SnUte8ANNs40fVZ7BIJcJI5J23amP7Wzu9xl46195y/NnBMHTw9wV66Nqb2Nl64r8KJy/v29IEubGn5+T7Mzp+JZPT9D8JHvfb0wpo4d/XzmqYvMimxnahRrPzUf/tGnwLGdARX6AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANyZf4IlfSZxg1AGAAAAAElFTkSuQmCC"
                      />
                      <Heading color="#cecece" size="sm" p="10px">
                        Video Call
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex maxWidth="700px">
                <Text
                  color="#dedede"
                  mr="60px"
                  ml="10px"
                  mt="10px"
                  lineHeight={5}
                  letterSpacing="normal"
                  fontSize="xs"
                >
                  Hi, I'm Muskaan, A UX Designer specialising in Digital Product
                  Design, Web Design, and User Interface/Experience Design.
                  Previously, I was freelancing full–time as a Web Designer /
                  Developer for 8+ years, creating websites that are simple,
                  beautiful, and easy to use. I am happiest when working on a UX
                  role, where I can focus on creative, user-centered projects
                  that solve problems and create user experiences that are
                  inclusive, well-informed, and cohesive. As your mentor, I can
                  help you to: - Build a captivating UX portfolio with case
                  studies that will get you hired.
                </Text>
              </Flex>
              <Flex
                display="flex"
                flexDirection="row"
                pt="10px"
                m="10px"
                alignItems="center"
              >
                <Tag
                  mr="10px"
                  backgroundColor="#000000"
                  colorScheme="whiteAlpha"
                  variant="solid"
                  color="#dadada"
                  size="lg"
                  rounded="lg"
                  p="10px"
                  borderRadius="50%"
                  fontSize="sm"
                >
                  Product Design
                </Tag>
                <Tag
                  mr="10px"
                  backgroundColor="#000000"
                  size="lg"
                  rounded="lg"
                  color="#dadada"
                  p="10px"
                  fontSize="sm"
                >
                  UX Design
                </Tag>
                <Tag
                  mr="10px"
                  backgroundColor="#000000"
                  size="lg"
                  p="10px"
                  color="#dadada"
                  fontSize="sm"
                >
                  UI Design
                </Tag>
                <Tag
                  mr="10px"
                  backgroundColor="#000000"
                  size="lg"
                  p="10px"
                  color="#dadada"
                  fontSize="sm"
                >
                  Web Development
                </Tag>
                <Tag
                  mr="10px"
                  backgroundColor="#000000"
                  size="lg"
                  p="10px"
                  color="#dadada"
                  fontSize="sm"
                >
                  Business Development & Strategy
                </Tag>
              </Flex>
              <Flex m="10px" justifyContent="flex-start" borderRadius={50}>
                <Button
                  variant="solid"
                  size="md"
                  p="30px"
                  backgroundColor="#F1A8AD"
                  color="#ffffff"
                  fontWeight="bold"
                  fontSize="lg"
                  borderRadius={50}
                  mt="20px"
                  mb="30px"
                >
                  CONNECT TO MENTOR
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default SingleMentor;
