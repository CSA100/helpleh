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
  TagLabel
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import React from 'react'


function onAccept() {
  return
}

export default function OppDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={0}
              pos={'relative'}
              overflow='hidden'
              >
              <Image
                src={
                  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                layout={'fill'}
              />
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                [Opportunity Name]
              </Heading>
              <Text color={'gray.500'}>
                [Opportunity job description] Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Text>
            </Stack>
            <HStack mt={4}>
              <CalendarIcon />
                <Text> 9am-12pm 17 July 2022 </Text>
            </HStack>
            <Stack mt={6} spacing={4} align={'left'}>
              <Text fontWeight={600}>Skills Needed</Text>
              <HStack spacing={2}>
                <Tag size='lg' borderRadius='full' colorScheme='red'>
                  <TagLabel>
                    Cooking
                  </TagLabel>
                </Tag>
                <Tag size='lg' borderRadius='full' colorScheme='red'>
                  <TagLabel>
                    Children
                  </TagLabel>
                </Tag>
                
              </HStack>
            </Stack>
        
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onAccept} >Volunteer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}