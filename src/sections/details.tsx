import {
  FormControl,
  FormLabel,
  Input, VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button
}
from "@chakra-ui/react";

export default function Details() {
  return(
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>
          If you already have an account, click her to log in.
        </Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Smith"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="1 Yonge Street"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Toronto"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="nmk">North Macedonia</option>
              <option value="de">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>
            Ship to billing Address
          </Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}
