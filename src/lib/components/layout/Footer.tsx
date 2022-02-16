import {
  Box,
  Flex,
  Grid,
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
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: 48 }}
      direction="column"
    >
      <Grid
        templateColumns={{ md: "repeat(3, 1fr)" }}
        gap={10}
        alignItems="center"
      >
        <Stack spacing="0.2rem">
          <Heading as="h4" fontSize={{ base: "2xl", md: "5xl" }}>
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

        <Stack justifyContent="space-between" spacing={{ base: 10, md: 24 }}>
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
      </Grid>
    </Flex>
  );
};

export default Footer;
