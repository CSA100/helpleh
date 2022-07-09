import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  HStack,
  Tag,
  TagLabel,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import { useEffect, useState } from "react";

export default function SignupForm() {
  const { authUser, loading, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contact, setContact] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [skills, setSkills] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (authUser) {
      router.push("/");
    }
  }, [authUser]);

  // on change handlers
  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const updateSkills = (skill) => {
    if (skills.includes(skill)) {
      var newArr = [...skills];
      const index = newArr.indexOf(skill);
      newArr.splice(index, 1);
      console.log("new arr: ", newArr);
      setSkills(() => newArr);
      return;
    }

    setSkills(() => [...skills, skill]);
  };

  // form submit
  const onSubmit = async (e) => {
    console.log("running! ", e);
    e.preventDefault();
    try {
      const result = await signUp(email, password, name, age, contact, skills);
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        setEmailError("Email already Taken!");
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to start your volunteering journey with us✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                isInvalid={emailError}
                value={email}
                onChange={handleEmailChange}
              />
              {emailError ? (
                <FormHelperText color="red.300">{emailError}</FormHelperText>
              ) : (
                <FormHelperText>Email is required</FormHelperText>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormControl>
            <FormControl id="contact">
              <FormLabel>Contact</FormLabel>
              <Input
                type="number"
                value={contact}
                onChange={handleContactChange}
              />
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={handleNameChange} />
            </FormControl>
            <FormControl id="age">
              <FormLabel>Age</FormLabel>
              <Input type="number" value={age} onChange={handleAgeChange} />
            </FormControl>
            <Flex wrap="wrap">
              {[
                { name: "children", color: "cyan" },
                { name: "elderly", color: "teal" },
                { name: "cooking", color: "red" },
                { name: "cleaning", color: "orange" },
                { name: "first aid", color: "yellow" },
              ].map((item) => (
                <Tag
                  onClick={() => updateSkills(item.name)}
                  cursor="pointer"
                  marginX={4}
                  marginY={1}
                  size="lg"
                  key={item.name}
                  variant="subtle"
                  colorScheme={
                    skills.includes(item.name) ? item.color : "black"
                  }
                >
                  {/* <TagLeftIcon boxSize="12px" /> */}
                  <TagLabel>{item.name}</TagLabel>
                </Tag>
              ))}
            </Flex>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
