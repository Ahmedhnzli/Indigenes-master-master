import {
  Box,
  Button,
 
  Heading,

  Stack,
  Text,

  useColorModeValue as mode,
  LightMode,
  Flex,
  Center,
} from '@chakra-ui/react'
import * as React from 'react'

import "../Map/style.css"
import vid from "../../assets/video/cover.mp4"

export const Hero = () => {
  return (

    <Box>
      <video
            autoPlay
            loop
          >
            <source src={vid} type="video/mp4" ></source>
          </video>
      <Flex as="section" color="white" bg={"blackAlpha.600"} >
        <Center h="100vh" w='100%'>
        <Box
          maxW={{
            base: 'xl',
            md: '5xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          
          <Box textAlign="center" >
          
            <Heading
              as="h1"
              size="3xl"
              fontWeight="bold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Earn <span>Benefits</span> from investing in projects in <span>Tunisia</span>
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto" opacity={0.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="10"
            mb="20"
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
                Get started free
              </Button>
            </LightMode>
          </Stack>
          </Box>
        </Center>
        </Flex>
    </Box>

  )
}
