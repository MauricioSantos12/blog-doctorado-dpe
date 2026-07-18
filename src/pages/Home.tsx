import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { blogs } from "../data/blogs";
import PostCard from "../components/PostCard";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <Box>
      {/* ===== Hero ===== */}
      <Box
        as="section"
        id="inicio"
        bgGradient="linear(to-b, brand.light, brand.pale)"
        px={6}
        py={{ base: 16, md: 24 }}
        scrollMarginTop="80px"
      >
        <Box maxW="900px" mx="auto" textAlign="center">
          <Text
            color="brand.deep"
            fontWeight="700"
            fontSize="sm"
            letterSpacing="wide"
            textTransform="uppercase"
            mb={4}
          >
            Blog científico · Educación intercultural
          </Text>
          <Heading
            as="h1"
            color="brand.ink"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.1"
            fontWeight="800"
          >
            Educación Intercultural en América Latina
          </Heading>
          <Text
            color="brand.deep"
            fontSize={{ base: "md", md: "xl" }}
            mt={4}
            maxW="720px"
            mx="auto"
          >
            El Laboratorio de Liderazgo «Líder en Mí» como experiencia
            pedagógica para formar ciudadanas transformadoras.
          </Text>
          <Text
            color="brand.ink"
            fontSize={{ base: "lg", md: "2xl" }}
            fontStyle="italic"
            mt={8}
            maxW="640px"
            mx="auto"
          >
            «Educar desde la diversidad es formar líderes capaces de transformar
            su comunidad».
          </Text>
        </Box>
      </Box>

      {/* ===== ¿De qué trata este blog? ===== */}
      <Box
        as="section"
        id="el-blog"
        px={6}
        py={{ base: 14, md: 20 }}
        scrollMarginTop="80px"
      >
        <Box maxW="820px" mx="auto">
          <Heading as="h2" size="lg" mb={5}>
            ¿De qué trata este blog?
          </Heading>
          <Stack spacing={4}>
            <Text fontSize={{ base: "md", md: "lg" }} color="brand.ink">
              Este blog divulga, desde una perspectiva científica y pedagógica,
              la importancia de la educación intercultural como un enfoque
              transformador para construir escuelas inclusivas, democráticas y
              socialmente justas en América Latina, a partir del laboratorio
              pedagógico de liderazgo «Líder en Mí».
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="brand.ink">
              A través de una propuesta de liderazgo femenino, fundamentada en
              los principios de Stephen Covey y articulada con el desarrollo
              socioemocional, las competencias ciudadanas y la participación
              familiar, buscamos evidenciar cómo una experiencia escolar puede
              reconocer la diversidad, fortalecer la convivencia y promover el
              desarrollo integral de niñas y adolescentes.
            </Text>
          </Stack>

          <Heading as="h3" size="md" mt={8} mb={3}>
            Objetivos
          </Heading>
          <List spacing={2} styleType="disc" pl={5} color="brand.ink">
            <ListItem>
              Divulgar la educación intercultural como enfoque transformador en
              América Latina.
            </ListItem>
            <ListItem>
              Evidenciar cómo el liderazgo femenino basado en principios
              constituye una experiencia intercultural.
            </ListItem>
            <ListItem>
              Establecer un diálogo entre los referentes teóricos de la
              interculturalidad y las prácticas pedagógicas de la institución.
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* ===== Posts ===== */}
      <Box
        as="section"
        id="posts"
        bg="white"
        px={6}
        py={{ base: 14, md: 20 }}
        scrollMarginTop="80px"
      >
        <Box maxW="1000px" mx="auto">
          <Heading as="h2" size="lg" mb={8}>
            Posts
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {blogs.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>

          <Box
            as={RouterLink}
            to="/experiencias-de-liderazgo"
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            alignItems={{ base: "flex-start", sm: "center" }}
            justifyContent="space-between"
            gap={4}
            mt={8}
            bg="brand.pale"
            border="1px solid"
            borderColor="brand.light"
            borderRadius="2xl"
            px={{ base: 6, md: 8 }}
            py={6}
            transition="all 0.15s ease"
            _hover={{
              borderColor: "brand.mid",
              boxShadow: "md",
              textDecoration: "none",
            }}
          >
            <Box>
              <Heading as="h3" size="md" color="brand.deep" mb={1}>
                Experiencias de Liderazgo
              </Heading>
              <Text color="brand.ink" fontSize="md">
                Mira el mosaico de fotografías de las actividades del
                Laboratorio.
              </Text>
            </Box>
            <Text fontWeight="700" color="brand.deep" whiteSpace="nowrap">
              Ver galería →
            </Text>
          </Box>
        </Box>
      </Box>

      {/* ===== Mensaje del autor ===== */}
      <Box
        as="section"
        id="autor"
        px={6}
        py={{ base: 16, md: 24 }}
        scrollMarginTop="80px"
      >
        <Box maxW="760px" mx="auto" textAlign="center">
          <Text
            as="blockquote"
            fontSize={{ base: "xl", md: "2xl" }}
            fontStyle="italic"
            color="brand.ink"
            lineHeight="1.5"
          >
            «Educar para la interculturalidad significa educar para la paz, la
            participación, la inclusión y el liderazgo ético. Formar líderes
            capaces de comprender al otro, trabajar colaborativamente y actuar
            con responsabilidad social es una de las contribuciones más valiosas
            que puede ofrecer la educación».
          </Text>
          <Text mt={6} fontWeight="700" color="brand.deep">
            Katrwin Dayana Morales y Diana Paola Escalante
          </Text>
          <Text fontSize="sm" color="brand.deep"></Text>
        </Box>
      </Box>
    </Box>
  );
}
