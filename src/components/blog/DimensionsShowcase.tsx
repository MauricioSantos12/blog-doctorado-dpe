import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

interface DimensionsShowcaseProps {
  title?: string
  items: string[]
}

export default function DimensionsShowcase({ title, items }: DimensionsShowcaseProps) {
  return (
    <Box>
      {title && (
        <Text fontWeight="700" color="brand.deep" mb={5} fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          {title}
        </Text>
      )}
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
        {items.map((item, i) => (
          <Flex
            key={item}
            direction="column"
            align="center"
            textAlign="center"
            gap={3}
            bg="white"
            border="1px solid"
            borderColor="brand.light"
            borderTop="4px solid"
            borderTopColor="brand.mid"
            borderRadius="xl"
            boxShadow="sm"
            px={4}
            py={6}
            transition="all 0.15s ease"
            _hover={{ boxShadow: 'md', borderTopColor: 'brand.deep', transform: 'translateY(-2px)' }}
          >
            <Flex
              boxSize={10}
              borderRadius="full"
              bg="brand.deep"
              color="white"
              align="center"
              justify="center"
              fontWeight="800"
              fontSize="md"
            >
              {i + 1}
            </Flex>
            <Text fontWeight="700" color="brand.ink" fontSize="sm" lineHeight="1.3">
              {item}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}
