import { Link as RouterLink, NavLink } from "react-router-dom";
import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg="brand.indigo"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        maxW="1100px"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
        gap={4}
      >
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="xl"
            fontWeight="800"
            color="brand.platinum"
            letterSpacing="tight"
          >
            Diana Escalante
            <Text as="span" color="brand.lavender">
              .
            </Text>
          </Text>
        </Link>

        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          <Link
            as={NavLink}
            to="/"
            fontSize="sm"
            fontWeight="600"
            color="brand.lavender"
            _hover={{ color: "brand.platinum", textDecoration: "none" }}
            _activeLink={{ color: "brand.platinum" }}
          >
            Inicio
          </Link>
          <Link
            as={RouterLink}
            to="/#posts"
            fontSize="sm"
            fontWeight="600"
            color="brand.lavender"
            _hover={{ color: "brand.platinum", textDecoration: "none" }}
          >
            Posts
          </Link>
        </HStack>

        <Button
          as={RouterLink}
          to="/#posts"
          bg="brand.platinum"
          color="brand.indigo"
          fontWeight="700"
          fontSize="sm"
          borderRadius="full"
          px={5}
          size="sm"
          _hover={{
            bg: "brand.lavender",
            color: "white",
            textDecoration: "none",
          }}
        >
          Ver posts
        </Button>
      </Flex>
    </Box>
  );
}
