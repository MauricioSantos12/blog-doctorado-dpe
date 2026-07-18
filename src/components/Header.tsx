import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";

const navLinks = [
  { to: "/#inicio", label: "Inicio" },
  { to: "/#el-blog", label: "El blog" },
  { to: "/#posts", label: "Posts" },
  { to: "/experiencias-de-liderazgo", label: "Experiencias" },
];

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg="white"
      borderBottom="1px solid"
      borderColor="brand.light"
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
        <Link as={RouterLink} to="/#inicio" _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="xl"
            fontWeight="800"
            color="brand.deep"
            letterSpacing="tight"
            whiteSpace="nowrap"
          >
            Líder en Mí
            <Text as="span" color="brand.mid">
              .
            </Text>
          </Text>
        </Link>

        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((item) => (
            <Link
              key={item.to}
              as={RouterLink}
              to={item.to}
              fontSize="sm"
              fontWeight="600"
              color="brand.deep"
              _hover={{ color: "brand.ink", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        <Button
          as={RouterLink}
          to="/#posts"
          bg="brand.deep"
          color="white"
          fontWeight="700"
          fontSize="sm"
          borderRadius="full"
          px={5}
          size="sm"
          _hover={{ bg: "brand.mid", color: "white", textDecoration: "none" }}
        >
          Ver posts
        </Button>
      </Flex>
    </Box>
  );
}
