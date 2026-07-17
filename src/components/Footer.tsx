import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" mt="auto" bg="brand.indigo" color="brand.lavender" borderTop="1px solid" borderColor="whiteAlpha.200">
      <Box maxW="860px" mx="auto" px={6} py={6} textAlign="center">
        <Text fontSize="sm">
          © {year} Blog del Doctorado de Diana Escalante. Todo el contenido es personal y de
          carácter académico.
        </Text>
      </Box>
    </Box>
  )
}
