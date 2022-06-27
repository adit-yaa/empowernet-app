import React from "react";
import { Flex, Link, Avatar, Text, Image, Divider } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  ChatIcon,
  SearchIcon,
  SettingsIcon
} from "@chakra-ui/icons";

const EmopwernetLogoFull = () => (
  <Image
    height="100px"
    width="100px\\\\\"
    src="https://empowernetmentoring.com/static/media/full-logo.25c1ca5b859ef110278699aa7b6fd2da.svg"
    alt="empowernet logo"
    pl="10px"
  />
);

const EmpSidenavDash = () => (
  <Flex flexDirection="column" height="100vh" justifyContent="space-between">
    <Flex flexDirection="column" p="5px">
      <EmopwernetLogoFull />
      <Divider borderColor="blackAlpha.500" />
      <Divider borderColor="#7c7c7c" opacity={0.56} boxShadow="20px" />
    </Flex>
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        p="10px"
        width="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#A09CDB"
          borderRadius="15px"
          width="100%"
          mb="10px"
        >
          <CheckCircleIcon color="#EF9CA1" m="8px" />
          <Link fontSize="md" color="#ffffff" fontWeight="bold">
            Home
          </Link>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#A09CDB"
          borderRadius="15px"
          width="100%"
          mb="10px"
        >
          <ChatIcon color="#EF9CA1" m="8px" />
          <Link fontSize="md" color="#ffffff" fontWeight="bold">
            Chat
          </Link>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#A09CDB"
          borderRadius="15px"
          width="100%"
          mb="10px"
        >
          <SearchIcon color="#EF9CA1" m="8px" />
          <Link fontSize="md" color="#ffffff" fontWeight="bold">
            Find Mentor
          </Link>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#A09CDB"
          borderRadius="15px"
          width="100%"
          mb="10px"
        >
          <ChatIcon color="#EF9CA1" m="8px" />
          <Link fontSize="md" color="#ffffff" fontWeight="bold">
            Profile
          </Link>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#A09CDB"
          borderRadius="15px"
          width="100%"
          mb="10px"
        >
          <SettingsIcon color="#EF9CA1" m="8px" />
          <Link fontSize="md" color="#ffffff" fontWeight="bold">
            Settings
          </Link>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column" alignItems="center" mb="20PX">
      <Avatar
        size="lg"
        name="Clavin West"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      />
      <Text fontSize="md" color="gray.300" pt="10PX">
        Calvin West
      </Text>
    </Flex>
  </Flex>
);

export default EmpSidenavDash;
