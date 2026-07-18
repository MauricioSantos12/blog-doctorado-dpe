import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface InfographicFlowProps {
  title?: string;
  steps: string[];
}

export default function InfographicFlow({
  title,
  steps,
}: InfographicFlowProps) {
  return (
    <Box
      borderRadius="xl"
      border="1px solid"
      borderColor="brand.light"
      bg="white"
      boxShadow="sm"
      p={{ base: 5, md: 6 }}
    >
      {title && (
        <Text
          fontWeight="700"
          color="brand.deep"
          mb={4}
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {title}
        </Text>
      )}
      <Wrap align="center" spacing={0}>
        {steps.map((step, i) => (
          <WrapItem key={step} alignItems="center">
            <Box
              bg="brand.deep"
              color="white"
              px={4}
              py={2}
              m={1}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
            >
              {step}
            </Box>
            {i < steps.length - 1 && (
              <Box
                as="span"
                color="brand.mid"
                fontWeight="700"
                mx={2}
                fontSize="lg"
              >
                →
              </Box>
            )}
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
