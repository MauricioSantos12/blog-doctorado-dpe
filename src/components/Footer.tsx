import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      mt="auto"
      bg="brand.mid"
      color="brand.ink"
      borderTop="1px solid"
      borderColor="brand.deep"
    >
      <Box maxW="860px" mx="auto" px={6} py={6} textAlign="center">
        <Text fontSize="sm">
          © {year} Blog científico «Líder en Mí» · Educación intercultural en
          América Latina.
        </Text>
      </Box>
    </Box>
  );
}
