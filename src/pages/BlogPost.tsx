import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { getBlogBySlug } from "../data/blogs";
import { references } from "../data/blogContent";
import { formatDate } from "../utils/formatDate";
import InfographicFlow from "../components/blog/InfographicFlow";
import DimensionsShowcase from "../components/blog/DimensionsShowcase";
import DataTable from "../components/blog/DataTable";
import NotFound from "./NotFound";

const lowerFirst = (text: string) =>
  text.charAt(0).toLowerCase() + text.slice(1);

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <Box as="article" maxW="820px" mx="auto" px={6} pt={10} pb={16}>
      <Link
        as={RouterLink}
        to="/#inicio"
        display="inline-block"
        mb={6}
        fontSize="sm"
        fontWeight="bold"
        color="brand.deep"
      >
        ← Volver al inicio
      </Link>

      <Box
        as="header"
        mb={8}
        pb={5}
        borderBottom="1px solid"
        borderColor="brand.light"
      >
        <Heading as="h1" size="xl" mb={3}>
          {post.title}
        </Heading>
        <Text mb={3} fontSize="sm" color="brand.deep">
          {formatDate(post.date)} · {post.author}
        </Text>
        <HStack spacing={2} wrap="wrap">
          {post.tags.map((tag) => (
            <Tag
              key={tag}
              size="sm"
              bg="brand.deep"
              color="white"
              borderRadius="full"
            >
              {lowerFirst(tag)}
            </Tag>
          ))}
        </HStack>
      </Box>

      <Stack spacing={5}>
        {post.content.map((paragraph, index) => (
          <Text key={index} fontSize="lg" color="brand.ink">
            {paragraph}
          </Text>
        ))}
      </Stack>

      {post.infographic && (
        <Box mt={10}>
          <InfographicFlow
            title={post.infographic.title}
            steps={post.infographic.steps}
          />
        </Box>
      )}

      {post.dimensions && (
        <Box mt={10}>
          <DimensionsShowcase
            title={post.dimensions.title}
            items={post.dimensions.items}
          />
        </Box>
      )}

      {post.table && (
        <Box mt={10}>
          <DataTable headers={post.table.headers} rows={post.table.rows} />
        </Box>
      )}

      <Box
        as="section"
        mt={12}
        pt={6}
        borderTop="1px solid"
        borderColor="brand.light"
      >
        <Heading as="h2" size="md" mb={4}>
          Referencias
        </Heading>
        <UnorderedList spacing={2}>
          {references.map((ref) => (
            <ListItem
              key={ref}
              fontSize="sm"
              color="brand.ink"
              pl={6}
              textIndent="-1.5rem"
            >
              {ref}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}
