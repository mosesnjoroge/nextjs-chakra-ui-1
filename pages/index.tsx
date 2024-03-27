import { Container, Flex, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack
          w="full"
          h="full"
          spacing={10}
          alignItems="flex-start"
        >
          <h1>Hello Next.js</h1>
          <h1>Hello Next.js</h1>
        </VStack>
        <VStack
          w="full"
          h="full"
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <h1>Hello Next.js</h1>
          <h1>Hello Next.js</h1>
        </VStack>
      </Flex>
    </Container>
  );
}
