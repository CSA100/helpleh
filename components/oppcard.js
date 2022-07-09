import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function OppCard({ opp }) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm:"480px", md: "480px" }}
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
          <Image
            rounded="lg"
            alt=""
            objectFit="cover"
            boxSize={{ sm: "90%", md: "90%" }}
            src={
              "https://www.healthcare.com.sg/wp-content/uploads/2020/10/st-andrews-nursing-home-buangkok.jpg"
            }
          />
        </Flex>
        <Stack
          justifyContent="center"
          p={4}
          pt={4}
        >
          <Stack alignItems="left">
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {opp.name}
          </Heading>
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
          <Button
              size="md"
              fontSize={"sm"}
              rounded={"full"}
              bg={"primary.100"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "primary.200",
              }}
              _focus={{
                bg: "primary.100", // to change
              }}
            >
              See Details
            </Button>
        </Stack>
          </Stack>
        </Stack>
    </Center>
  );
}
