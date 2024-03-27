import Cart from "@/src/sections/cart";
import Details from "@/src/sections/details";
import { Container, Flex} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" p={10}>
      <Flex>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
  );
}
