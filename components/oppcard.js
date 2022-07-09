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
        w={{ sm: "95%", md: "540px" }}
        height={{ sm: "357px", md: "15rem" }}
        // direction="row"
        direction={{ base: "column", md: "row" }}
        bg={"white"}
        color="black"
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex
          w={{ sm: "100%", md: "100px" }}
          bg="blue.200"
          justifyContent={"center"}
          alignItems="center"
        >
          <Image
            alt=""
            objectFit="cover"
            boxSize={{ sm: "50px", md: "100%" }}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
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
            <b>Date and Time:</b> {opp.datetime}
          </Text>
          <Text textAlign={"center"} color={"gray.700"} px={3}>
            <b>Job Scope:</b> {opp.jobscope}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
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
