import Details from "@/src/sections/details";
import Cart from "@/src/sections/cart";
import { Container, Flex} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
  );
}
