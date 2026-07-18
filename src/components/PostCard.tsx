import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import type { BlogPost } from "../data/blogs";
// import { formatDate } from "../utils/formatDate";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Box
      as={RouterLink}
      to={`/${post.slug}`}
      display="flex"
      flexDirection="column"
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="brand.light"
      borderLeft="4px solid"
      borderLeftColor="brand.mid"
      boxShadow="sm"
      p={6}
      transition="all 0.15s ease"
      _hover={{
        boxShadow: "md",
        borderLeftColor: "brand.deep",
        textDecoration: "none",
      }}
    >
      {/* <Text fontSize="xs" fontWeight="600" color="brand.deep" textTransform="uppercase" letterSpacing="wide" mb={2}>
        {formatDate(post.date)}
      </Text> */}
      <Heading as="h3" size="md" color="brand.deep" mb={2}>
        {post.title}
      </Heading>
      <Text color="brand.ink" fontSize="md" mb={4} flex="1">
        {post.excerpt}
      </Text>
      <Text fontSize="sm" fontWeight="700" color="brand.deep">
        Leer más →
      </Text>
    </Box>
  );
}
