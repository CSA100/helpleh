import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export default function UserCard({ user }) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user?.name ?? "No Name"}
        </Heading>
        <Text py={1} fontWeight={600} color={"gray.500"} mb={4}>
          {user?.email ?? "No Email"}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {/* Contact: {user.contact} */}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Text>Skills:</Text>
          {user?.skills ? (
            user.skills.map((skill, i) => {
              return (
                <Badge key={i} px={2} py={1} fontWeight={"400"}>
                  {skill}
                </Badge>
              );
            })
          ) : (
            <Text>You have not added a skill</Text>
          )}
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
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
              bg: "primary.200",
            }}
            _focus={{
              bg: "primary.100",
            }}
          >
            Edit Profile
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
