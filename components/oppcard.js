import {
  Badge,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
export default function OppCard({ opp, children, isOrg }) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "550px", md: "550px" }}
        height={{ sm: "250px", md: "250px" }}
        direction={{ base: "row" }}
        bg={"white"}
        color="black"
        boxShadow={"md"}
        padding={4}
      >
        <Flex
          w={{ sm: "200px", md: "200px" }}
          bg="white.200"
          justifyContent={"center"}
          alignItems="center"
        >
          {/* Display Picture */}
          {opp.imageURL ? (
            <Image
              rounded="lg"
              alt=""
              objectFit="cover"
              boxSize={{ sm: "200px", md: "90%" }}
              src={opp.imageURL}
            />
          ) : (
            <></>
          )}
        </Flex>
        <Stack
          justifyContent="center"
          p={4}
          pt={4}
          w={{ sm: "400px", md: "400px" }}
          height={{ sm: "215px", md: "215px" }}
        >
          <HStack justify="space-between">
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {opp.orgname}
            </Heading>
            {isOrg && <EditIcon />}
          </HStack>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            <b>Contact:</b> {opp.contact}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            <b>Location:</b> {opp.location}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            <b>Date & Time:</b> {opp.datetime}
          </Text>
          {/* <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            <b>Job Scope:</b> {opp.jobscope}
          </Text> */}
          <Divider></Divider>
          {children}
        </Stack>
      </Stack>
    </Center>
  );
}
