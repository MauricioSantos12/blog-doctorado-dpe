import { Link as RouterLink, useParams } from 'react-router-dom'
import { Box, Heading, HStack, Link, Tag, Text } from '@chakra-ui/react'
import { getBlogBySlug } from '../data/blogs'
import { formatDate } from '../utils/formatDate'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const blog = slug ? getBlogBySlug(slug) : undefined

  if (!blog) {
    return <NotFound />
  }

  return (
    <Box as="article" maxW="760px" mx="auto" px={6} pt={12} pb={16}>
      <Link as={RouterLink} to="/" display="inline-block" mb={6} fontSize="sm" fontWeight="bold" color="brand.indigo">
        ← Volver al inicio
      </Link>

      <Box as="header" mb={8} pb={5} borderBottom="2px solid" borderColor="brand.lavender">
        <Heading as="h1" size="xl" mb={2}>
          {blog.title}
        </Heading>
        <Text mb={3} fontSize="sm" color="brand.lavender">
          {formatDate(blog.date)} · {blog.author}
        </Text>
        <HStack spacing={2} wrap="wrap">
          {blog.tags.map((tag) => (
            <Tag key={tag} size="sm" bg="brand.indigo" color="brand.platinum" borderRadius="full">
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>

      <Box>
        {blog.content.map((paragraph, index) => (
          <Text key={index} fontSize="lg" mb={5}>
            {paragraph}
          </Text>
        ))}
      </Box>
    </Box>
  )
}
