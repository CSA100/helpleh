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
  } from '@chakra-ui/react';
  
  export default function RewardPage() {
    return (
      <Center py={6}>
        <VStack>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'xl'}
          p={6}
          textAlign={'left'}>
            <Center>
              <Image
              rounded={'xl'}
              width={'350px'}
              height={'220px'}
              objectFit='cover'
              src={
                'https://www.nrn.com/sites/nrn.com/files/Starbucks-AI-earnings-call_4.jpg'
              }
              ></Image>
            </Center>
            <br></br>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            $10 Starbucks Gift Card
          </Heading>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          <Badge
              px={3}
              py={3}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'600'}>
              200 Points
            </Badge>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'primary.100'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'primary.200',
              }}
              _focus={{
                bg: 'primary.100',
              }}>
              Redeem
            </Button>
          </Stack>
        </Box>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'xl'}
          p={6}
          textAlign={'left'}>
            <Center>
              <Image
              rounded={'xl'}
              width={'350px'}
              height={'220px'}
              objectFit='cover'
              src={
                'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/4-CYTKLXJETPVAGX/hero/acf29f43d96648939b4bb7e023bef331_1648777871674508754.jpeg'
              }
              ></Image>
            </Center>
            <br></br>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            $10 Coffee Bean Gift Card
          </Heading>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          <Badge
              px={3}
              py={3}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'600'}>
              200 Points
            </Badge>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'primary.100'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'primary.200',
              }}
              _focus={{
                bg: 'primary.100',
              }}>
              Redeem
            </Button>
          </Stack>
        </Box>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'xl'}
          p={6}
          textAlign={'left'}>
            <Center>
              <Image
              rounded={'xl'}
              width={'350px'}
              height={'220px'}
              objectFit='cover'
              src={
                'https://i.imgur.com/0jBdf9Q.jpg'
              }
              ></Image>
            </Center>
            <br></br>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            $10 FairPrice Voucher
          </Heading>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          <Badge
              px={3}
              py={3}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'600'}>
              100 Points
            </Badge>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'primary.100'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'primary.200',
              }}
              _focus={{
                bg: 'primary.100',
              }}>
              Redeem
            </Button>
          </Stack>
        </Box>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'xl'}
          p={6}
          textAlign={'left'}>
            <Center>
              <Image
              rounded={'xl'}
              width={'350px'}
              height={'220px'}
              objectFit='cover'
              src={
                'https://www.ionorchard.com/static/media/gift-vouchers.3d80f159.jpg'
              }
              ></Image>
            </Center>
            <br></br>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            $50 Capital Voucher
          </Heading>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          <Badge
              px={3}
              py={3}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'600'}>
              400 Points
            </Badge>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'primary.100'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'primary.200',
              }}
              _focus={{
                bg: 'primary.100',
              }}>
              Redeem
            </Button>
          </Stack>
        </Box>
        </VStack>
      </Center>
    );
  }