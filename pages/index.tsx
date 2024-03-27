import Cart from "@/src/sections/cart";
import Details from "@/src/sections/details";
import { Container, Flex, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
  );
}
