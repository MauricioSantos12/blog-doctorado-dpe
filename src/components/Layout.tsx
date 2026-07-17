import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" w="full">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}
