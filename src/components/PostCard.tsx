import { Link as RouterLink } from 'react-router-dom'
import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import type { BlogPost } from '../data/blogs'
import { formatDate } from '../utils/formatDate'
import { ArrowUpRightIcon, CalendarIcon } from './icons'

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Box
      as={RouterLink}
      to={`/${post.slug}`}
      display="block"
      position="relative"
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="blackAlpha.100"
      boxShadow="sm"
      p={6}
      transition="all 0.15s ease"
      _hover={{ boxShadow: 'md', borderColor: 'brand.lavender', textDecoration: 'none' }}
    >
      <HStack justify="space-between" align="flex-start" mb={2}>
        <Heading as="h3" size="md" color="brand.indigo" pr={8}>
          {post.title}
        </Heading>
        <Box
          flexShrink={0}
          boxSize={8}
          borderRadius="full"
          bg="brand.indigo"
          color="brand.platinum"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ArrowUpRightIcon boxSize={4} />
        </Box>
      </HStack>

      <Text color="brand.lavender" fontSize="md" mb={4}>
        {post.excerpt}
      </Text>

      <HStack spacing={2} color="brand.lavender" fontSize="sm">
        <CalendarIcon boxSize={4} />
        <Text>{formatDate(post.date)}</Text>
      </HStack>
    </Box>
  )
}
