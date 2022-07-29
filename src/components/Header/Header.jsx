import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  LightMode
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Box >
      <Box as="header">
        <Box
          backdropBlur={13}
          maxW="7xl"  
          mx="auto"
          py="4"
          px={{
            base: '6 ',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Indigenes</VisuallyHidden>
                <Logo h="10"/>
              </Box>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              > 
              <NavLink.Desktop href="#"> About </NavLink.Desktop>
              <NavLink.Desktop href="#"> Features </NavLink.Desktop>
              <NavLink.Desktop href="#"> Pricing </NavLink.Desktop>
              <NavLink.Desktop href="#"> Contact </NavLink.Desktop>
              </HStack>
            
              </Flex>
              <Flex alignItems="center" justify="flex-end">
              <HStack
                spacing="3"
                display={{
                  base: "none",
                  md: "flex",
                }}>

                  <NavLink.Desktop><Link to="/login">Sign in</Link>  </NavLink.Desktop>
                <LightMode>
                <Button colorScheme="yellow" rounded="5" >
                  Sign up
                </Button>
                </LightMode>
                <ColorModeSwitcher/>
                </HStack>
                <Box ml="5">
                <MobileNav />
              </Box>
              </Flex>
            </Flex>
        </Box>
      </Box>
    </Box>
  )
}
