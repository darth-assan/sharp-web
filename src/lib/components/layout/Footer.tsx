import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      // align="center"
      bg="brand.primary"
      py={10}
      px={5}
      direction="column"
    >
      <Stack spacing="1.5rem">
        <Stack spacing="0.2rem">
          <Heading as="h4" fontSize="2xl">
            SHARP!
          </Heading>
          <Text>“We do all”</Text>
        </Stack>

        <Stack>
          <Heading as="h5" fontSize="lg">
            Quick Links
          </Heading>
          <Stack as={List} fontSize="sm">
            <ListItem>Home</ListItem>
            <ListItem>Request an Artisan</ListItem>
            <ListItem>FAQs</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Create an Account</ListItem>
          </Stack>
        </Stack>

        <Box>
          <Heading as="h5" fontSize="lg">
            Email
          </Heading>
          <Text fontSize="sm">xxxxxx@gmail.com</Text>
        </Box>

        <Stack spacing="1.2rem">
          <Box>
            <Heading as="h5" fontSize="lg">
              Download Our Mobile App
            </Heading>
            <Text fontSize="sm">
              Connect with a Serpro with just a few clicks
            </Text>
          </Box>
          <HStack align="center" spacing="2rem">
            <Box>
              <Image
                h={10}
                w="full"
                src="/images/playstore.png"
                alt="Platstore"
              />
            </Box>

            <Box>
              <Image
                h={10}
                w="full"
                src="/images/appstore.png"
                alt="AppStore"
              />
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Footer;
