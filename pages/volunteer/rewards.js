import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
  VStack,
  Link,
  Badge,
  useColorModeValue,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { useAuth } from "../../context/AuthUserContext";

export default function RewardPage() {
  const { authUser } = useAuth();
  return (
    <Center py={6}>
      <VStack>
        <Box
          minWidth={"810px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"md"}
          rounded={"xl"}
          p={6}
          textAlign={"left"}
          bgGradient="linear(to-t, primary.200, primary.300)"
        >
          <VStack>
            <Heading fontSize={"xl"} fontFamily={"body"}>
              Current Points:
            </Heading>
            <Box
              bgColor={"primary.100"}
              width={"220px"}
              textAlign={"center"}
              rounded={"3xl"}
              p={4}
            >
              <Text fontSize={"5xl"} color={"white"} fontWeight={"bold"}>
                {authUser?.currentpt ?? "No Current Points"}
              </Text>
            </Box>
            <Box
              bgColor={"gray.200"}
              width={"180px"}
              textAlign={"center"}
              rounded={"full"}
              p={1}
            >
              <Text fontWeight={"medium"}>
                Lifetime Points: {authUser?.lifept ?? "No Lifetime Points"}
              </Text>
            </Box>
          </VStack>
        </Box>
        <br></br>
        <HStack>
          <Box
            maxW={"400px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"xl"}
            p={6}
            textAlign={"left"}
          >
            <Center>
              <Image
                rounded={"xl"}
                width={"350px"}
                height={"220px"}
                objectFit="cover"
                src={
                  "https://www.nrn.com/sites/nrn.com/files/Starbucks-AI-earnings-call_4.jpg"
                }
                alt="starbucks"
              ></Image>
            </Center>
            <Heading mt={3} fontSize={"2xl"} fontFamily={"body"}>
              $10 Starbucks Gift Card
            </Heading>
            <Divider mt={2}></Divider>
            <Stack mt={4} direction={"row"} spacing={4}>
              <Badge
                px={3}
                py={3}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"600"}
              >
                200 Points
              </Badge>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"primary.100"}
                color={"white"}
                _hover={{
                  bg: "primary.200",
                }}
                _focus={{
                  bg: "primary.100",
                }}
              >
                Redeem
              </Button>
            </Stack>
          </Box>
          <Box
            maxW={"400px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"xl"}
            p={6}
            textAlign={"left"}
          >
            <Center>
              <Image
                rounded={"xl"}
                width={"350px"}
                height={"220px"}
                objectFit="cover"
                src={
                  "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/4-CYTKLXJETPVAGX/hero/acf29f43d96648939b4bb7e023bef331_1648777871674508754.jpeg"
                }
                alt="starbucks"
              ></Image>
            </Center>
            <Heading mt={3} fontSize={"2xl"} fontFamily={"body"}>
              $10 Coffee Bean Gift Card
            </Heading>
            <Divider mt={2}></Divider>
            <Stack mt={4} direction={"row"} spacing={4}>
              <Badge
                px={3}
                py={3}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"600"}
              >
                200 Points
              </Badge>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"primary.100"}
                color={"white"}
                _hover={{
                  bg: "primary.200",
                }}
                _focus={{
                  bg: "primary.100",
                }}
              >
                Redeem
              </Button>
            </Stack>
          </Box>
        </HStack>
        <HStack>
          <Box
            maxW={"400px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"xl"}
            p={6}
            textAlign={"left"}
          >
            <Center>
              <Image
                rounded={"xl"}
                width={"350px"}
                height={"220px"}
                objectFit="cover"
                src={"https://i.imgur.com/0jBdf9Q.jpg"}
                alt="starbucks"
              ></Image>
            </Center>
            <Heading mt={3} fontSize={"2xl"} fontFamily={"body"}>
              $10 FairPrice Voucher
            </Heading>
            <Divider mt={2}></Divider>
            <Stack mt={4} direction={"row"} spacing={4}>
              <Badge
                px={3}
                py={3}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"600"}
              >
                100 Points
              </Badge>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"primary.100"}
                color={"white"}
                _hover={{
                  bg: "primary.200",
                }}
                _focus={{
                  bg: "primary.100",
                }}
              >
                Redeem
              </Button>
            </Stack>
          </Box>
          <Box
            maxW={"400px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"xl"}
            p={6}
            textAlign={"left"}
          >
            <Center>
              <Image
                rounded={"xl"}
                width={"350px"}
                height={"220px"}
                objectFit="cover"
                src={
                  "https://www.ionorchard.com/static/media/gift-vouchers.3d80f159.jpg"
                }
                alt="starbucks"
              ></Image>
            </Center>
            <Heading mt={3} fontSize={"2xl"} fontFamily={"body"}>
              $50 Capital Voucher
            </Heading>
            <Divider mt={2}></Divider>
            <Stack mt={4} direction={"row"} spacing={4}>
              <Badge
                px={3}
                py={3}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"600"}
              >
                400 Points
              </Badge>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"primary.100"}
                color={"white"}
                _hover={{
                  bg: "primary.200",
                }}
                _focus={{
                  bg: "primary.100",
                }}
              >
                Redeem
              </Button>
            </Stack>
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
}
