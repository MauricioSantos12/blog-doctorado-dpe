import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { blogs } from "../data/blogs";
import PostCard from "../components/PostCard";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#posts") {
      document
        .getElementById("posts")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <Box>
      <Box as="section" bg="brand.indigo" px={6} py={{ base: 20, md: 28 }}>
        <Box maxW="820px" mx="auto" textAlign="center">
          <Text
            color="brand.lavender"
            fontWeight="700"
            fontSize="sm"
            letterSpacing="wide"
            textTransform="uppercase"
            mb={4}
          >
            Bitácora de investigación doctoral
          </Text>
          <Heading
            as="h1"
            color="brand.platinum"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.05"
            fontWeight="800"
          >
            Blog del Doctorado.
          </Heading>
          <Heading
            as="p"
            color="brand.lavender"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.05"
            fontWeight="800"
            mt={1}
          >
            De Diana Escalante.
          </Heading>
          <Text
            color="brand.lavender"
            fontSize={{ base: "md", md: "lg" }}
            mt={6}
            maxW="560px"
            mx="auto"
          >
            El proceso, las preguntas y los aprendizajes de una investigación
            doctoral, contados a medida que ocurren.
          </Text>
          <Button
            as={RouterLink}
            to="/#posts"
            mt={10}
            bg="brand.platinum"
            color="brand.indigo"
            fontWeight="700"
            borderRadius="full"
            size="lg"
            px={8}
            _hover={{
              bg: "brand.lavender",
              color: "white",
              textDecoration: "none",
            }}
          >
            Ver posts
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        id="posts"
        px={6}
        py={{ base: 14, md: 20 }}
        scrollMarginTop="88px"
      >
        <Box maxW="900px" mx="auto">
          <Heading as="h2" size="lg" mb={8}>
            Últimos posts
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {blogs.map((blog) => (
              <PostCard key={blog.slug} post={blog} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
