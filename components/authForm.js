import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
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

export default function AuthForm({ formType }) {
  const { authUser, loading, signUp, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

  const onSubmit = async (e) => {
    console.log("running! ", e);
    e.preventDefault();
    try {
      var result;
      if (formType == "signUp") {
        result = await signUp(email, password);
      } else {
        result = await signIn(email, password);
      }
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        setEmailError("Email already Taken!");
      }
    }
  };

  console.log("authUser: ", authUser);
  console.log("loading: ", loading);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>
            {formType == "signUp"
              ? "Create your account"
              : "Sign in to your account"}
          </Heading>
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
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                {formType == "signUp" ? "Sign up" : "Sign in"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
