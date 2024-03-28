import {
  VStack,
  GridItem,
  Heading,
  Text,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"

export default function Cart() {
  // color mode hook from chakraUI
  const {toggleColorMode} = useColorMode();

  // background colors for light and dark mode
  const bgColor = useColorModeValue("gray.50","whiteAlpha.50");
  const secondColor = useColorModeValue("gray.600","gray.400");

  return(
    <VStack
    w="full"
    h="full"
    p={10}
    spacing={6}
    alignItems="flex-start"
    bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on yours eyes, {' '}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems={"center"} w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="displaying a red skateboard as product 1"/>
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0}>
            <Heading size="md">Penny board</Heading>
            <Text color={secondColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent={"space-between"}>
          <Text color={secondColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider/>
      </VStack>
      <HStack justifyContent={"space-between"} w="full">
        <Text color={secondColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  )
}
