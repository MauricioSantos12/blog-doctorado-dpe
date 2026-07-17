import { Link as RouterLink } from 'react-router-dom'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Box textAlign="center" maxW="760px" mx="auto" px={6} py={20}>
      <Heading as="h1" size="2xl" mb={4}>
        404
      </Heading>
      <Text mb={4}>No encontramos el post que buscas.</Text>
      <Link as={RouterLink} to="/" fontWeight="bold" color="brand.indigo">
        ← Volver al inicio
      </Link>
    </Box>
  )
}
