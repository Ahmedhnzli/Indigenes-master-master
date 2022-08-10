
import { Avatar, background, Box, Button, Center,Image,Grid, Checkbox, CheckboxGroup, Flex, Heading, Input, InputGroup, InputRightElement, LightMode, Select, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { Link as RLink, useLocation } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import '../sections/Projects/Banner/style.css'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import img from '../assets/img/projects/test.png';


const PageProjects = props => {
  const location = useLocation();
  const {state} = location; 
  console.log('data', state)
  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: '100vh', md: '60vh' }}
        w='100%'
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage='https://upload.wikimedia.org/wikipedia/commons/c/c6/Ksiba%2C_Bizerte_1.jpg'
        bgSize="cover"
        mx={{ md: 'auto' }}
        className='back'
      ></Box>

      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="5.5rem"
        mb="30px"
      >
        <Text fontSize="5rem" color="white" fontWeight="extrabold">
        Bizerte
        </Text>
        
        <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="3"
            mb="10"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                color="blackAlpha.900"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                <Text>Choose a District</Text>
                <FaArrowRight />
              </Button>
            </LightMode>
          </Stack>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mb="5px" mt="5px">
        <Flex
          direction="column"
          w="90%"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg='gray.800'
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
            <InputGroup mt='-8.8vh' borderRadius='100px'
              maxW={{
                md: 'auto',
              }}
              w="full"
              
            >
              <InputRightElement color="gray.400" w='auto' justify='center' >
                <Button bg='transparent'><FiSearch /></Button>
              
                <Select size='md'
                  bg='gray.600'
                  w='auto'
                  color='white'
                  placeholder='Mateur'
                  
                >
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputRightElement>
              <Input bg={useColorModeValue('white', 'gray.700')} placeholder="Search for project"/>
              
            </InputGroup>
            <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Button value='naruto'  _checked={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                  }}>Naruto</Button>
                <Button value='sasuke'>Sasuke</Button>
                <Button value='kakashi'>Kakashi</Button>
              </Stack>
            </CheckboxGroup>
        <Grid position='absolute' templateColumns="repeat(3, 1fr)" gap={6} mx='50px'>

          <Center py={6}>
            <Box
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
            >
              <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image src={img} layout={'fill'} />
              </Box>
              <Stack>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={'gray.500'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>

        </Grid>
        </Flex>
      </Flex>
    </Flex>
  )
}


export default PageProjects


