import {
  Badge,
  Button,
  Center,
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
        w={{ sm:"550px", md: "550px" }}
        height={{ sm: "300px", md: "300px" }}
        direction={{ base: "row" }}
        bg={"white"}
        color="black"
        boxShadow={"2xl"}
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
            alt=""
            objectFit="cover"
            boxSize={{ sm: "90%", md: "90%" }}
            src={
              "https://www.healthcare.com.sg/wp-content/uploads/2020/10/st-andrews-nursing-home-buangkok.jpg"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={2}
        >
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
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            <b>Job Scope:</b> {opp.jobscope}
          </Text>

          <Stack
            width={"80%"}
            mt={"2rem"}
            direction={"row"}
            padding={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"primary.100"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Accept
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
