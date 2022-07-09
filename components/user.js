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
  } from '@chakra-ui/react';
  
  export default function UserCard({opp}) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {opp.name}
          </Heading>
          <Text py={1} fontWeight={600} color={'gray.500'} mb={4}>
            {opp.email}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Contact: {opp.contact}
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Text>Skills:</Text>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {opp.skills[0]}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {opp.skills[1]}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
                {opp.skills[2]}
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button> */}
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
              Edit Profile
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }