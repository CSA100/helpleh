import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  useColorModeValue,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";

function onAccept() {
  return;
}

export default function OppDetails({ opp, isOrg }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="md"
        fontSize={"sm"}
        rounded={"full"}
        bg={"primary.100"}
        color={"white"}
        variant="outline"
        _hover={{
          bg: "primary.200",
        }}
        _focus={{
          bg: "primary.100",
        }}
        onClick={onOpen}
      >
        See Details
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={0}
              pos={"relative"}
              overflow="hidden"
            >
              {opp.imageURL ? (
                <Image alt="" src={opp.imageURL} layout={"fill"} />
              ) : (
                <></>
              )}
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {opp.title}
              </Heading>
              <Text color={"gray.500"}>{opp.jobscope}</Text>
            </Stack>
            <HStack mt={4}>
              <CalendarIcon />
              <Text> {opp.datetime} </Text>
            </HStack>
            <Stack mt={6} spacing={4} align={"left"}>
              <Text fontWeight={600}>Skills Needed</Text>
              <HStack spacing={2}>
                {opp.skills.map((skill, i) => {
                  return (
                    <Tag
                      key={i}
                      size="lg"
                      borderRadius="full"
                      colorScheme="red"
                    >
                      <TagLabel>{skill}</TagLabel>
                    </Tag>
                  );
                })}
              </HStack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onAccept}>
              Volunteer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
