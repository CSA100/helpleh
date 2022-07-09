import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Image,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function RewardPage() {
    return (
      <Center py={6}>
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'md'}
          rounded={'xl'}
          p={6}
          textAlign={'left'}>
            <Center>
              <Image
              rounded={'xl'}
              width={'300px'}
              height={'220px'}
              objectFit='cover'
              src={
                'https://www.paragon.com.sg/media/media/images/stores/Starbucks/starbucks_logo.jpg'
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
      </Center>
    );
  }