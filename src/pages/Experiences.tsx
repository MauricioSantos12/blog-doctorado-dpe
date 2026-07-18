import { useCallback, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { activities } from "../data/activities";

export default function Experiences() {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <Box maxW="1100px" mx="auto" px={6} pt={10} pb={16}>
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

      <Heading as="h1" size="xl" mb={3}>
        Experiencias de Liderazgo
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} color="brand.ink" maxW="100%">
        Un recorrido en imágenes por las actividades del Laboratorio de
        Liderazgo «Líder en Mí»: talleres, retos familiares y acciones de
        servicio.
      </Text>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="brand.ink"
        mb={10}
        maxW="100%"
      >
        Haz clic en cualquier imagen para verla en detalle.
      </Text>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
        {activities.map((activity, index) => (
          <Box
            key={activity.src}
            as="button"
            onClick={() => setActive(index)}
            aria-label={`Ampliar ${activity.alt}`}
            overflow="hidden"
            borderRadius="xl"
            border="1px solid"
            borderColor="brand.light"
            boxShadow="sm"
            bg="white"
            role="group"
            cursor="zoom-in"
          >
            <Image
              src={activity.src}
              alt={activity.alt}
              w="full"
              h={{ base: "150px", md: "200px" }}
              objectFit="cover"
              transition="transform 0.25s ease"
              _groupHover={{ transform: "scale(1.06)" }}
            />
          </Box>
        ))}
      </SimpleGrid>

      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={1400}
          bg="blackAlpha.800"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={activities[active].alt}
        >
          <Box
            as="button"
            onClick={close}
            aria-label="Cerrar"
            position="absolute"
            top={4}
            right={4}
            boxSize={10}
            borderRadius="full"
            bg="brand.deep"
            color="white"
            fontSize="xl"
            fontWeight="700"
            lineHeight="1"
            _hover={{ bg: "brand.mid" }}
          >
            ×
          </Box>
          <Image
            src={activities[active].src}
            alt={activities[active].alt}
            maxH="85vh"
            maxW="100%"
            w="auto"
            borderRadius="lg"
            objectFit="contain"
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      )}
    </Box>
  );
}
